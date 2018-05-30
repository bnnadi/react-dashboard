import {all, take, takeEvery, call, put, fork, race} from 'redux-saga/effects'
import { push } from 'react-router-redux';
import { getToken, clearUser } from '../../helpers/utility';
import authActions from './actions';
import appActions from '../app/actions';
import { login, logout } from '../../services/auth.service';

export function * authorize (username, password) {
    // We send an action that tells Redux we're sending a request
    yield put({type: appActions.SENDING_REQUEST, sending: true})
  
    // We then try to register or log in the user, depending on the request
    try {
      let response
  
      response = yield call(login, username, password)

      return response
    } catch (error) {
      console.log('hi')
      // If we get an error we send Redux the appropiate action and return
      yield put({type: appActions.REQUEST_ERROR, error: error.message})
  
      return false
    } finally {
      // When done, we tell Redux we're not in the middle of a request any more
      yield put({type: appActions.SENDING_REQUEST, sending: false})
  }
}

export function* loginError() {
    yield takeEvery(authActions.LOGIN_ERROR, function*() {
      yield clearUser();
    });
}

/**
 * Log in saga
 */
export function * loginFlow () {
    // Because sagas are generators, doing `while (true)` doesn't block our program
    // Basically here we say "this saga is always listening for actions"
    while (true) {
      // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
      const request = yield take(authActions.LOGIN_REQUEST)

      const {username, password} = request.payload;
  
      // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
      // lead to a race condition. This is unlikely, but just in case, we call `race` which
      // returns the "winner", i.e. the one that finished first
      const winner = yield race({
        auth: call(authorize, username, password),
        logout: take(authActions.LOGOUT)
      })
  
      // If `authorize` was the winner...
      if (winner.auth) {
        yield localStorage.setItem('token', winner.auth.token);
        yield localStorage.setItem('user', JSON.stringify(winner.auth.user));
        yield put({type: authActions.LOGIN_SUCCESS, token: winner.auth.token, user: winner.auth.user });
        yield put(push('/dashboard')); // Go to dashboard page
      }
    }
  }
  
/**
 * Log out saga
 */
export function * logoutFlow () {
    while (true) {
      yield take(authActions.LOGOUT)
      console.log('logging out...')
      yield clearUser();
      yield put(push('/signin'));
      yield call(logout)
    }
}
export function* checkAuthorization() {
    yield takeEvery(authActions.CHECK_AUTHORIZATION, function*() {
      const token = getToken().get('token');
      if (token) {
        yield put({
          type: authActions.LOGIN_SUCCESS,
          token
        });
      }
    });
  }

export default function* rootSaga() {
    yield all([
        yield fork(loginFlow),
        yield fork(logoutFlow),
        yield fork(checkAuthorization)
    ]);
}