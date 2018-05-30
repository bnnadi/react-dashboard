const invoiceActions = {
    GET_INVOICE: 'GET_INVOICE',
    UPDATE_INVOICE: 'UPDATE_INVOICE',
    UPDATE_INVOICE_SAGA: 'UPDATE_INVOICE_SAGA',
    SELECT_CURRENT_INVOICE: 'SELECT_CURRENT_INVOICE',
    TOGGLE_VIEW: 'INVOICE_TOGGLE_VIEW',
    UPDATE_EDIT_INVOICE: 'INVOICE_UPDATE_EDIT_INVOICE',
    initData: () => ({ type: invoiceActions.GET_INVOICE }),
    deleteInvoice: selected => {
      return (dispatch, getState) => {
        const invoices = getState().Invoices.get('invoices');
        const newInvoices = [];
        invoices.forEach(invoice => {
          const selectedIndex = selected.indexOf(invoice.key);
          if (selectedIndex === -1) {
            newInvoices.push(invoice);
          }
        });
        dispatch({
          type: invoiceActions.UPDATE_INVOICE_SAGA,
          invoices: newInvoices
        });
      };
    },
    updateInvoice: invoice => {
      return (dispatch, getState) => {
        const invoices = getState().Invoices.get('invoices');
        const index = invoices.map(inv => inv.id).indexOf(invoice.id);
        if (index === -1) {
          invoices.push(invoice);
        } else {
          invoices[index] = invoice;
        }
        dispatch({
          type: invoiceActions.UPDATE_INVOICE_SAGA,
          invoices,
          invoice
        });
      };
    },
    selectCurrentInvoice: id => ({ type: invoiceActions.SELECT_CURRENT_INVOICE, id }),
    toggleView: view => ({ type: invoiceActions.TOGGLE_VIEW, view }),
    editInvoice: invoice => ({ type: invoiceActions.UPDATE_EDIT_INVOICE, invoice })
  };
  export default invoiceActions;