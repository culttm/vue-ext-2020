import Vue from 'vue';
import { browser } from '../shared/runtimeEventBus';
import createStore from './store';

global.browser = browser;

Vue.prototype.$browser = global.browser;

document.addEventListener('DOMContentLoaded', async () => {
  const store = await createStore();
  const App = require('./App').default;

  const el = document.createElement('div');

  document.body.appendChild(el);

  /* eslint-disable no-new */
  new Vue({
    store,
    render: h => h(App),
  }).$mount(el);
});
