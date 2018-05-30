import { Map } from "immutable";
import timesheetActions from "./actions";

const initState = new Map({
  loadingInitData: false,
  count: 0,
  timesheets: [],
  seectedId: null,
  editView: false
});

export default function timesheetReducer(state = initState, action) {
  switch (action.type) {
    case timesheetActions.INIT_DATA:
    return state
        .set('timesheets', action.payload.rows)
        .set('count', action.payload.count)
        .set('loadingInitData', true);
    default:
      return state;
  }
}