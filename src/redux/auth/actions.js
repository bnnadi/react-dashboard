const authActions = {
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT: 'LOGOUT',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    checkAuthorization: () => ({ type: authActions.CHECK_AUTHORIZATION }),
    login: obj => ({
      type: authActions.LOGIN_REQUEST,
      payload: obj
    }),
    logout: () => ({
      type: authActions.LOGOUT
    })
};
export default authActions;