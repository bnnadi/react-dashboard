const userActions = {
    INIT_DATA: 'EMPLOYEE_INIT_DATA',
    INIT_DATA_SAGA: 'EMPLOYEE_INIT_DATA_SAGA',
    EDIT_USER: 'EDIT_USER',
    CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
    EDIT_VIEW: 'EDIT_VIEW',
    initData: () => ({ type: userActions.INIT_DATA_SAGA }),
    changeContact: (id) => ({
      type: userActions.CHANGE_EMPLOYEE,
      id,
    }),
    viewChange : view => ({
        type: userActions.EDIT_VIEW,
        view,
    })
};

export default userActions;