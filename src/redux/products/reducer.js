import { Map } from 'immutable';
import clone from 'clone';
import productActions from './actions';

const initState = new Map({
    loadingInitData: false,
    view: 'gridView',
    products: []
});
export default (state = initState, action) => {
    switch (action.type) {
        case productActions.INIT_DATA:
            return state
                .set('products', action.payload.rows)
                .set('count', action.payload.count)
                .set('loadingInitData', true);
        case productActions.CHANGE_VIEW:
            return state.set('view', action.view);
        case productActions.UPDATE_DATA:
            return state.set('products', clone(action.products));
        default:
            return state;
    }
};