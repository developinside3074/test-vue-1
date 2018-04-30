import types from '@/types/auth';
import globalTypes from '@/types/global';
import Vue from 'vue';

const state = {
    user:null,
    logged: !!window.localStorage.getItem('_token')
};

const actions = {


};

const getters = {

    //Obtenemos el usuario
    [types.getters.user]: (state)=>{
        return state.user;
    },

    //esta logueado
    [types.getters.logged]: (state)=>{
        return state.logged;
    }
};

const mutations = {

    //Establecemos el user a traves del token
    [types.mutations.setUser]:(state)=>{
        if(window.localStorage.getItem('_token')){
            const token = window.localStorage.getItem('_token');  
            const jwtDecode = require('jwt-decode');
            state.user = jwtDecode(token);          
        }
        else{
            state.logged = false;
            state.user = null;
        }
    },
    //establecemos el estado
    [types.mutations.setLogged]: (state, logged) =>{
        state.logged = logged;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};