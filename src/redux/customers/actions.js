function ascendingSort(contact1, contact2) {
    const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
    const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
    return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
  }

const customerActions = {
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    EDIT_CUSTOMER: 'EDIT_CUSTOMER',
    DELETE__CUSTOMER: 'DELETE__CUSTOMER',
    CHANGE_CUSTOMER: 'CHANGE_CUSTOMER',
    EDIT_VIEW: 'EDIT_VIEW',
    addCustomer: () => {
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
            type: customerActions.ADD_CUSTOMER,
            customers: [...getState().Customers.get('customers'), newContact],
            selectedId: newContact.id,
          });
        };
      },
    changeCustomer: (id) => ({
      type: customerActions.CHANGE_CUSTOMER,
      id,
    }),
    viewChange : view => ({
        type: customerActions.EDIT_VIEW,
        view,
    })
};

export default customerActions;