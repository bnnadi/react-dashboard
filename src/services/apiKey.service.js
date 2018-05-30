import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll
};

function get() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'apiKey.json', requestOptions).then(response => response.json())
};

function getAll() {
    console.log(getToken().get('token'));
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'apiKeys.json', requestOptions).then(response => response.json())
};