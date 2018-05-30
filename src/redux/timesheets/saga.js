import { all, call, takeEvery, put } from 'redux-saga/effects';
import timesheetActions from './actions';
import appActions from '../app/actions';
import { getAll } from '../../services/timesheet.service';

export function* initData() {

  try {
    let response;
  
    response = yield call(getAll);

    yield put({
      type: timesheetActions.INIT_DATA,
      payload: response.result
    });

  } catch(e) {
    console.log(e)
    yield put({type: appActions.REQUEST_ERROR, error: e.message});
  } finally {
    yield put({type: appActions.SENDING_REQUEST, sending: false});
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(timesheetActions.INIT_DATA_SAGA, initData),
  ]);
}