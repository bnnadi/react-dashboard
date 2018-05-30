import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

export function* getInvoice() {
    try {} catch(e) {} finally {}
    yield put({
      type: actions.UPDATE_INVOICE,
      invoices: []
    });
  }
  export function* updateInvoiceSaga({ invoices, invoice }) {
    yield put({
      type: actions.UPDATE_INVOICE,
      invoices,
      invoice
    });
  }
  export default function* rootSaga() {
    yield all([
      yield takeEvery(actions.GET_INVOICE, getInvoice),
      yield takeEvery(actions.UPDATE_INVOICE_SAGA, updateInvoiceSaga)
    ]);
  }
  