'use strict';

import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getDefaultHeaders = () => {
    const defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    const token = localStorage.getItem('token');
    if (token && token.length) {
        defaultHeaders['Authorization'] = token;
    }

    return defaultHeaders;
}

export default axios.create({
    baseURL,
    withCredentials: false,
    headers: getDefaultHeaders(),
    timeout: 10000
});
