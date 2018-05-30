import { Map } from "immutable";
import customerActions from "./actions";

const initState = new Map({
  customers: [],
  seectedId: null,
  editView: false
});

export default function customerReducer(state = initState, action) {
  switch (action.type) {
    case customerActions.CHANGE_CUSTOMER:
      return state.set("seectedId", action.id).set("editView", false);
    case customerActions.ADD_CUSTOMER:
      return state
        .set("customers", action.customers)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case customerActions.EDIT_CUSTOMER:
      return state.set("customers", action.customers);
    case customerActions.DELETE__CUSTOMER:
      return state
        .set("customers", action.customers)
        .set("seectedId", action.seectedId);
    case customerActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

// export { customers };
