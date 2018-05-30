export function getView(width) {
    let newView = 'MobileView';
    if (width > 1220) {
        newView = 'DesktopView';
    } else if (width > 767) {
        newView = 'TabView';
    }
    return newView;
}
const appActions = {
    COLLPSE_CHANGE: "COLLPSE_CHANGE",
    COLLPSE_OPEN_DRAWER: "COLLPSE_OPEN_DRAWER",
    CHANGE_OPEN_KEYS: "CHANGE_OPEN_KEYS",
    TOGGLE_ALL: "TOGGLE_ALL",
    CHANGE_CURRENT: "CHANGE_CURRENT",
    SENDING_REQUEST: "SENDING_REQUEST",
    REQUEST_ERROR: "REQUEST_ERROR",
    REQUEST_SUCCESS: "REQUEST_SUCCESS",
    toggleCollapsed: () => ({
      type: appActions.COLLPSE_CHANGE
    }),
    toggleAll: (width, height) => {
      const view = getView(width);
      const collapsed = view !== "DesktopView";
      return {
        type: appActions.TOGGLE_ALL,
        collapsed,
        view,
        height
      };
    },
    toggleOpenDrawer: () => ({
      type: appActions.COLLPSE_OPEN_DRAWER
    }),
    changeOpenKeys: openKeys => ({
      type: appActions.CHANGE_OPEN_KEYS,
      openKeys
    }),
    changeCurrent: current => ({
      type: appActions.CHANGE_CURRENT,
      current
    })
};
export default appActions;