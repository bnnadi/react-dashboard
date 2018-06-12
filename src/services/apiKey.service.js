import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    create,
    get,
    getAll
};

function create(ttl) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token'),
            body: JSON.stringify({'ttl': ttl})
          },
    };
    return fetch(apiUrl+'apiKey.json', requestOptions).then(response => response.json())
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
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'apiKeys.json', requestOptions).then(response => response.json())
};