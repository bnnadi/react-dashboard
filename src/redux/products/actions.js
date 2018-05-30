const productActions = {
    INIT_DATA: 'PRODUCT_INIT_DATA',
    INIT_DATA_SAGA: 'PRODUCT_INIT_DATA_SAGA',
    UPDATE_DATA: 'PRODUCT_UPDATE_DATA',
    UPDATE_DATA_SAGA: 'PRODUCT_UPDATE_DATA_SAGA',
    CHANGE_VIEW: 'PRODUCT_CHANGE_VIEW',
    initData: () => ({ type: productActions.INIT_DATA_SAGA }),
    changeView: view => ({
        type: productActions.CHANGE_VIEW,
        view
    }),
};

export default productActions;