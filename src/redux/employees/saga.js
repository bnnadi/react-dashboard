import { all, call, takeEvery, put } from 'redux-saga/effects';
import employeeActions from './actions';
import appActions from '../app/actions';
import { getAll } from '../../services/employee.service';

export function* initData() {

  try {
    let response;
  
    response = yield call(getAll);

    yield put({
      type: employeeActions.INIT_DATA,
      payload: response.result
    });

  } catch(e) {
    console.log(e)
    yield put({type: appActions.REQUEST_ERROR, error: e.message});
  } finally {
    yield put({type: appActions.SENDING_REQUEST, sending: false});
  }
}

export function* addEmployee() {
}
export function* editEmployee() {
}
export function* deleteEmployee() {
}
export default function* rootSaga() {
  yield all([
    takeEvery(employeeActions.INIT_DATA_SAGA, initData),
    takeEvery(employeeActions.ADD_EMPLOYEE, addEmployee),
    takeEvery(employeeActions.EDIT_EMPLOYEE, editEmployee),
    takeEvery(employeeActions.DELETE__EMPLOYEE, deleteEmployee),
  ]);
}
