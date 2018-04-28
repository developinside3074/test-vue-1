import Vue from 'vue'
import App from '@/App.vue'



//vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:3333/api/v1/';
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', `Bearer ${window.localStorage.getItem('_token')}`);
  next();
});
//.vue resource


//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
//.vuex

//blockui
import Blockui from 'vue-blockui';
Vue.use(Blockui);
//.blockui

//modulos y tipos
import globalTypes from '@/types/global';
//.modulos y tipos

//vue-validate
import VeeValidate, {Validator} from 'vee-validate';
Vue.use(VeeValidate);
//.vee-validate

//vue-tables-2
import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

//global store (almacen global de datos con vuex)
export const store = new Vuex.Store({

  state:{
    processing:false,
    language:'es'
  },

  actions:{
    

  },
  mutations:{

  },

  modules:{

  }

});

//.global store


new Vue({
  el: '#app',
  render: h => h(App),
  store
})
