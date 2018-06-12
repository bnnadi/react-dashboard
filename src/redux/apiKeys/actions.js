const apiKeyActions = {
    INIT_DATA: 'API_KEY_INIT_DATA',
    INIT_DATA_SAGA: 'API_KEY_INIT_DATA_SAGA',
    CREATE_KEY: 'CREATE_KEY',
    CHANGE_VIEW: 'API_KEY_CHANGE_VIEW',
    initData: () => ({ type: apiKeyActions.INIT_DATA_SAGA }),
    createKey: obj =>  ({ type: apiKeyActions.CREATE_KEY, payload: obj }),
    changeView: view => ({
        type: apiKeyActions.CHANGE_VIEW,
        view
    }),
};

export default apiKeyActions;