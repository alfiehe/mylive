import Vue from 'vue'
import App from './App.vue'

// 引入iview ui框架
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
