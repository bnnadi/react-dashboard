import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    login,
    logout
}

function login (username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'username': username, 'password': password})
    };
    return fetch(apiUrl+'login.json', requestOptions).then(response => response.json())
};

function logout () {
    const requestOptions = {
        method: 'GET',
        headers: { 'x-access-token': getToken().get('token') }
    };
    return fetch(apiUrl+'logout', requestOptions)
};