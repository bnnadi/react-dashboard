import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import apiKeySagas from './apiKeys/saga';
import customerSagas from './customers/saga';
import employeeSagas from './employees/saga';
import productSagas from './products/saga';
import invoicesSagas from './invoices/saga';
import timesheetsSagas from './timesheets/saga';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        apiKeySagas(),
        customerSagas(),
        employeeSagas(),
        productSagas(),
        invoicesSagas(),
        timesheetsSagas(),
    ])
}