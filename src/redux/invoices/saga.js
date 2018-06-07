import { all, takeEvery, put } from 'redux-saga/effects';
import invoiceActions from './actions';

export function* getInvoice() {
    try {} catch(e) {} finally {}
    yield put({
      type: invoiceActions.UPDATE_INVOICE,
      invoices: []
    });
  }
  export function* updateInvoiceSaga({ invoices, invoice }) {
    yield put({
      type: invoiceActions.UPDATE_INVOICE,
      invoices,
      invoice
    });
  }
  export default function* rootSaga() {
    yield all([
      yield takeEvery(invoiceActions.GET_INVOICE, getInvoice),
      yield takeEvery(invoiceActions.UPDATE_INVOICE_SAGA, updateInvoiceSaga)
    ]);
  }
  