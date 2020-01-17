import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/dev.scss';

const VueBase = process.env.NODE_ENV === 'production'
  ? require('../dist/vue-base').default
  : require('../src/index').default;

Vue.config.productionTip = false;

Vue.use(VueBase);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
