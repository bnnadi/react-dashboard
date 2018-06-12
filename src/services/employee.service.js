import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll,
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

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'employee.json', requestOptions).then(response => response.json())
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'employees.json', requestOptions).then(response => response.json())
};


function addEmployee() {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + 'employee.json', requestOptions).then(response => response.json())
  };

  function updateEmployee() {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + 'employee.json', requestOptions).then(response => response.json())
  };

  function addPhone(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/addAddress.json`, requestOptions).then(response => response.json())
  };

  function addAddress(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/addAddress.json`, requestOptions).then(response => response.json())
  };

  function updatePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/updateAddress.json`, requestOptions).then(response => response.json())
  };

  function updateAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/updateAddress.json`, requestOptions).then(response => response.json())
  };

  function removePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/removeAddress.json`, requestOptions).then(response => response.json())
  };

  function removeAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(apiUrl + `employee/${id}/removeAddress.json`, requestOptions).then(response => response.json())
  };

  function deleteEmployee(id) {
    const requestOptions = {
      method: 'DELETE',
      headers: getToken()
    };
    return fetch(apiUrl + `employee/${id}.json`, requestOptions).then(response => response.json())
  };