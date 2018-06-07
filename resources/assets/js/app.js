
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Index from './views/Index';

import Checkout from './views/Checkout';
import FindDrugstore from './views/FindDrugstore';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes  = [
  { name: 'checkout', path: '/', component: Checkout },
  { name: 'findDrugstore', path: '/findDrugstore', component: FindDrugstore }
];

const router = new VueRouter({ routes });

Vue.filter('currency', function (value) {
  if (!value) return '';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});

const app = new Vue({
  el: '#app',
  router,
  template: '<index />',
  components: { Index }
});
