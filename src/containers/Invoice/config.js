const orderStatusOptions = ['Pending', 'Shipped', 'Delivered'];
const newInvoice = {
    orderStatus: 'Pending',
    orderDate: new Date().getTime(),
    currency: '$',
    billTo: '',
    billToAddress: '',
    billFrom: '',
    billFromAddress: '',
    invoiceList: [
      {
        key: 1,
        itemName: '',
        costs: 0,
        qty: 0,
        price: 0
      }
    ],
    subTotal: 0,
    vatRate: 10,
    vatPrice: 0,
    totalCost: 0
  };
export {
    newInvoice,
    orderStatusOptions
  };
  