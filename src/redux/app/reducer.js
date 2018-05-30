import { Map } from 'immutable';
import { getDefaultPath } from '../../helpers/urlSync';
import appActions, { getView } from './actions';

const preKeys = getDefaultPath();

const initState = new Map({
    collapsed: window.innerWidth > 1220 ? false : true,
    view: getView(window.innerWidth),
    height: window.innerHeight,
    openDrawer: false,
    openKeys: preKeys,
    current: preKeys
});
export default function appReducer(state = initState, action) {
    switch (action.type) {
        case appActions.COLLPSE_CHANGE:
            return state.set('collapsed', !state.get('collapsed'));
        case appActions.COLLPSE_OPEN_DRAWER:
            return state.set("openDrawer", !state.get("openDrawer"));
        case appActions.TOGGLE_ALL:
            if (state.get('view') !== action.view || action.height !== state.height) {
                const height = action.height ? action.height : state.height;
                return state 
                    .set('collapsed', action.collapsed)
                    .set('view', action.view)
                    .set('height', height);
            }
            break;
        case appActions.CHANGE_OPEN_KEYS:
            return state.set('openKeys', appActions.openKeys);
        case appActions.CHANGE_CURRENT:
            return state.set('current', appActions.current);
        default:
            return state;
    }
    return state;
}