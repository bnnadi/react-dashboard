import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll,
    del
}

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'product.json', requestOptions).then(response => response.json())
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'products.json', requestOptions).then(response => response.json())
};

function update() {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'product.json', requestOptions).then(response => response.json())
};

function generateBarcode(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'product/'+id+'/generateBarcode').then(response => response.json())
};

function del(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'product/'+id+'.json').then(response => response.json())
};