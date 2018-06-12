import { Map } from 'immutable';
import apiKeyActions from './actions';

const initState = new Map({
    loadingInitData: false,
    count: 0,
    view: 'listView',
    api_keys: [],
    seectedId: null,
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
        default:
            return state;
    }
};