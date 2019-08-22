import { router } from '../../main.js';
import axios from 'axios';

const state = {
    token: window.localStorage.getItem('token')
};

const getters = {
    isLoggedIn(state) {
        return !!state.token
    }
};

const actions = {
    login: async ({ commit }, userInfo) => {
        try {
            //get token based on user form input
            const response = await axios.post('http://localhost:5000/users/login', {
                headers: {
                    'Content-type': 'application/json'
                },
                "email": userInfo.email,
                "password": userInfo.password
            });


            const login_token = response.data.token
            //set state.token to token
            commit('setToken', login_token);

            //commit token to local storage
            window.localStorage.setItem('token', login_token);

            //redirect 
            router.push('/meals')
        } catch (error) {
            // Error
            if (error.response) {
                return error.response.data;
            }
        }
    },
    register: async ({ commit }, userInfo) => {
        try {
            //send request to api and get register token
            const response = await axios.post('http://localhost:5000/users/register', {
                headers: {
                    'Content-type': 'application/json'
                },
                "name": userInfo.name,
                "email": userInfo.email,
                "password": userInfo.password
            });

            const register_token = response.data.token;
            //get token from response and commit to state
            commit('setToken', register_token);
            //store token in local storage
            window.localStorage.setItem('token', register_token);
            //redirect using router
            router.push('/meals')
        } catch (error) {
            if (error.response) {
                return error.response.data;
            }
        }
    },
    //commit is a function used to call mutations
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('token');
        router.push('/');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};