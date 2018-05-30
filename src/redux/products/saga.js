import { all, call, takeEvery, put } from 'redux-saga/effects';
import productActions from './actions';
import appActions from '../app/actions';
import { getAll } from '../../services/product.service';

export function* changedCard() {
  yield takeEvery(productActions.CHANGE_CARDS, function*() {});
}
export function* initData() {

  try {
    let response;
  
    response = yield call(getAll);

    yield put({
      type: productActions.INIT_DATA,
      payload: response.result
    });

  } catch(e) {
    yield put({type: appActions.REQUEST_ERROR, error: e.message});
  } finally {
    yield put({type: appActions.SENDING_REQUEST, sending: false});
  }
}
export function* updateData({ products, productQuantity }) {
  yield put({
    type: productActions.UPDATE_DATA,
    products,
    productQuantity
  });
}
export default function*() {
  yield all([
    takeEvery(productActions.INIT_DATA_SAGA, initData),
    takeEvery(productActions.UPDATE_DATA_SAGA, updateData)
  ]);
}
