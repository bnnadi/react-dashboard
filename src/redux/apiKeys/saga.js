import { all, call, takeEvery, put } from 'redux-saga/effects';
import apiKeyActions from './actions';
import appActions from '../app/actions';
import { create, getAll } from '../../services/apiKey.service';

export function* initData() {

  try {
    let response;
  
    response = yield call(getAll);

    yield put({
      type: apiKeyActions.INIT_DATA,
      payload: response.result
    });

  } catch(e) {
    yield put({type: appActions.REQUEST_ERROR, error: e.message});
  } finally {
    yield put({type: appActions.SENDING_REQUEST, sending: false});
  }
}

export function* createKey() {
  try {
    let response;
  
    response = yield call(create);

    yield put({
      type: apiKeyActions.INIT_DATA,
      payload: response.result
    });

  } catch(e) {
    yield put({type: appActions.REQUEST_ERROR, error: e.message});
  } finally {
    yield put({type: appActions.SENDING_REQUEST, sending: false});
  }
}

export default function*() {
  yield all([
    takeEvery(apiKeyActions.INIT_DATA_SAGA, initData),
    takeEvery(apiKeyActions.INIT_DATA_SAGA, createKey),
  ]);
}