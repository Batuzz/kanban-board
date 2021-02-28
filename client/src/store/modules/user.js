'use strict';

import {signIn} from "@/services/api-calls/user";
import axiosInstance from "@/services/axios-config";
import jwt_decode from "jwt-decode";

export const namespaced = true;

export const state = {
    username: '',
    role: '',
    token: '',
};

export const mutations = {
    SET_USER_DATA(state, {name, role, token}) {
        localStorage.setItem('token', token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer: ${token}`;
        state.username = name;
        state.token = token;
        state.role = role;
    },
    LOGOUT(state) {
        localStorage.removeItem('token');
        delete state.username;
        delete state.token;
        delete state.role;
        location.reload();
    }
};

export const actions = {
    login({commit}, credentials) {
        return signIn(credentials)
            .then(({data}) => {
                const { token } = data;
                const { name, role } = jwt_decode(token);
                commit('SET_USER_DATA', { name, role, token });
            })
    },
    logout({commit}) {
        commit('LOGOUT');
    }
};

export const getters = {
    loggedIn: state => !!state.token,
    loggedUser: state => state.username,
    loggedUserRole: state => state.role,
};
