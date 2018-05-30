import { Map } from "immutable";
import employeeActions from "./actions";

const initState = new Map({
  loadingInitData: false,
  count: 0,
  employees: [],
  seectedId: null,
  editView: false
});

export default function employeeReducer(state = initState, action) {
  switch (action.type) {
    case employeeActions.INIT_DATA:
    return state
        .set('employees', action.payload.rows)
        .set('count', action.payload.count)
        .set('loadingInitData', true);
    case employeeActions.CHANGE_EMPLOYEE:
      return state.set("seectedId", action.id).set("editView", false);
    case employeeActions.ADD_EMPLOYEE:
      return state
        .set("employees", action.employees)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case employeeActions.EDIT_employee:
      return state.set("employees", action.employees);
    case employeeActions.DELETE__employee:
      return state
        .set("employees", action.employees)
        .set("seectedId", action.seectedId);
    case employeeActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}
