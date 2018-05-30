function ascendingSort(contact1, contact2) {
    const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
    const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
    return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
  }

const employeeActions = {
    INIT_DATA: 'EMPLOYEE_INIT_DATA',
    INIT_DATA_SAGA: 'EMPLOYEE_INIT_DATA_SAGA',
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
    DELETE__EMPLOYEE: 'DELETE__EMPLOYEE',
    CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
    EDIT_VIEW: 'EDIT_VIEW',
    initData: () => ({ type: employeeActions.INIT_DATA_SAGA }),
    addEmployee: () => {
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
            type: employeeActions.ADD_EMPLOYEE,
            employees: [...getState().Employees.get('employees'), newContact],
            selectedId: newContact.id,
          });
        };
      },
    changeContact: (id) => ({
      type: employeeActions.CHANGE_EMPLOYEE,
      id,
    }),
    viewChange : view => ({
        type: employeeActions.EDIT_VIEW,
        view,
    })
};

export default employeeActions;