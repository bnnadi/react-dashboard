import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll,
    getUnit,
    getAllUnits,
    addUnit,
    updateUnit,
    removeUnit,
}

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'organization.json', requestOptions).then(response => response.json())
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'organizations.json', requestOptions).then(response => response.json())
};

function getUnit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+`organization/${id}/unit.json`, requestOptions).then(response => response.json())
};

function getAllUnits(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+`organization/${id}/units.json`, requestOptions).then(response => response.json())
};

function addUnit(id) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+`organization/${id}/addUnit.json.json`, requestOptions).then(response => response.json())
};

function updateUnit(id) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+`organization/${id}/updateUnit.json`, requestOptions).then(response => response.json())
};

function removeUnit(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+`organization/${id}/removeUnit.json`, requestOptions).then(response => response.json())
};
