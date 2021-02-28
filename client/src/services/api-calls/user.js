'use strict';

import axiosInstance from '../axios-config';
import { register, login } from '../custom-uris';

export function signUp(credentials) {
    return axiosInstance.post(register, credentials);
}

export function signIn(credentials) {
    return axiosInstance.post(login, credentials);
}
