import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll,
};

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'timesheet.json', requestOptions).then(response => response.json())
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'timesheets.json', requestOptions).then(response => response.json())
};

function del(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'timesheets/'+id+'.json').then(response => response.json())
};