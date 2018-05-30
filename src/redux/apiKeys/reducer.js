import { Map } from 'immutable';
import clone from 'clone';
import apiKeyActions from './actions';

const initState = new Map({
    loadingInitData: false,
    view: 'listView',
    api_keys: []
});
export default (state = initState, action) => {
    switch (action.type) {
        case apiKeyActions.INIT_DATA:
            return state
                .set('api_keys', action.payload.rows)
                .set('count', action.payload.count)
                .set('loadingInitData', true);
        case apiKeyActions.CHANGE_VIEW:
            return state.set('view', action.view);
        case apiKeyActions.UPDATE_DATA:
            return state.set('api_keys', clone(action.api_keys));
        default:
            return state;
    }
};