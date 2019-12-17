import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './styles/main.scss';

const VueBase = process.env.NODE_ENV === 'production'
  ? require('../dist/vue-base').default
  : require('../src/index').default

Vue.config.productionTip = false;

Vue.use(VueBase);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
