import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from './../node_modules/axios/lib/axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(VueAxios,axios)
Vue.config.productionTip = false

Vue.use(VueSweetalert2);


// const cors = require('cors')

// App.use(cors({ origin: ['http://127.0.0.1:3000/testSms'], }))

new Vue({
  render: h => h(App),
}).$mount('#app')
