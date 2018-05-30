import { all, takeEvery, fork } from 'redux-saga/effects';
import customerActions from './actions';

export function* addCustomer() {
  yield takeEvery(customerActions.ADD_CUSTOMER, function*() {});
}
export function* editCustomer() {
  yield takeEvery(customerActions.EDIT_CUSTOMER, function*() {});
}
export function* deleteCustomer() {
  yield takeEvery(customerActions.DELETE__CUSTOMER, function*() {});
}
export default function* rootSaga() {
  yield all([fork(addCustomer), fork(editCustomer), fork(deleteCustomer)]);
}
