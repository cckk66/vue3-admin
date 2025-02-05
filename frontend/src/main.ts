import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import '@/styles/index.scss';
import '@/permission';
import './icons';

/**
 * This project originally used easy-mock to simulate data requests,
 * but its official service is not stable.
 * So here We use Mock.js for a local emulation,
 * it will intercept your request and you won't see the request in the network.
 * If you remove `import '../mock'` it will automatically request easy-mock data.
 */
import '../mock'; // simulation data requests

import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import '@/registerServiceWorker';




Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
