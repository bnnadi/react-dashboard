import { apiUrl } from '../settings';
import { getToken } from '../helpers/utility';

export {
    get,
    getAll,
    addCustomer,
    updateCustomer,
    addAddress,
    addPhone,
    updateAddress,
    updatePhone,
    removeAddress,
    removePhone,
    deleteCustomer
}

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'customer.json', requestOptions).then(response => response.json())
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': getToken().get('token')
          },
    };
    return fetch(apiUrl+'customers.json', requestOptions).then(response => response.json())
};


function addCustomer() {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer.json', requestOptions).then(response => response.json())
  };

  function updateCustomer() {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer.json', requestOptions).then(response => response.json())
  };

  function addPhone(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/addAddress.json', requestOptions).then(response => response.json())
  };

  function addAddress(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/addAddress.json', requestOptions).then(response => response.json())
  };

  function updatePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/updateAddress.json', requestOptions).then(response => response.json())
  };

  function updateAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/updateAddress.json', requestOptions).then(response => response.json())
  };

  function removePhone(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/removeAddress.json', requestOptions).then(response => response.json())
  };

  function removeAddress(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'x-access-token': getToken().get('token'), 'Content-Type': 'application/json' }
    };
    return fetch(api.url + 'customer/'+id+'/removeAddress.json', requestOptions).then(response => response.json())
  };

  function deleteCustomer(id) {
    const requestOptions = {
      method: 'DELETE',
      headers: getToken()
    };
    return fetch(api.url + 'customer/'+id+'.json', requestOptions).then(response => response.json())
  };