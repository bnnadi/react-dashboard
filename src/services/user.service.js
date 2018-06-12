import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    authenticate,
    get,
    addEmployee,
    updateEmployee,
    addAddress,
    addPhone,
    updateAddress,
    updatePhone,
    removeAddress,
    removePhone,
    deleteEmployee
}

function authenticate() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'user/authenticate', requestOptions).then(response => response.json())
};

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'user.json', requestOptions).then(response => response.json())
};

function addEmployee() {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + 'user.json', requestOptions).then(response => response.json())
  };

  function updateEmployee() {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + 'user.json', requestOptions).then(response => response.json())
  };

  function addPhone(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/addAddress.json`, requestOptions).then(response => response.json())
  };

  function addAddress(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/addAddress.json`, requestOptions).then(response => response.json())
  };

  function updatePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/updateAddress.json`, requestOptions).then(response => response.json())
  };

  function updateAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/updateAddress.json`, requestOptions).then(response => response.json())
  };

  function removePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/removeAddress.json`, requestOptions).then(response => response.json())
  };

  function removeAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `user/${id}/removeAddress.json`, requestOptions).then(response => response.json())
  };

  function deleteEmployee(id) {
    const requestOptions = {
      method: 'DELETE',
      headers: getToken()
    };
    return fetch(apiUrl + `user/${id}.json`, requestOptions).then(response => response.json())
  };