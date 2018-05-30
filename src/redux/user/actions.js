const userActions = {
    INIT_DATA: 'EMPLOYEE_INIT_DATA',
    INIT_DATA_SAGA: 'EMPLOYEE_INIT_DATA_SAGA',
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
    DELETE__EMPLOYEE: 'DELETE__EMPLOYEE',
    CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
    EDIT_VIEW: 'EDIT_VIEW',
    initData: () => ({ type: userActions.INIT_DATA_SAGA }),
    addeMPLOYEE: () => {
        const newContact = {
          id: new Date(),
          firstName: '',
          avatar: '',
          LastName: '',
          mobile: '',
          home: '',
          name: '',
          company: '',
          work: '',
          note: '',
        };
        return (dispatch, getState) => {
          dispatch({
            type: userActions.ADD_EMPLOYEE,
            employees: [...getState().Employees.get('employees'), newContact],
            selectedId: newContact.id,
          });
        };
      },
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