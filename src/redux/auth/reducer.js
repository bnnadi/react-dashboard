import { Map } from 'immutable';
import authActions from './actions';

const initState = new Map({ token: null });

export default function authReducer(state = initState, action) {
    switch(action.type) {
      case authActions.LOGIN_SUCCESS:
        return state.set('token', action.token).set('user', action.user);
      case authActions.LOGOUT:
        return initState;
      default:
        return state;
    }
}