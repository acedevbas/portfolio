import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/scss/app.scss'
import VueFeather from 'vue-feather';
// import { createI18n } from 'vue-i18n'

import Breadcrumbs from './components/bread_crumbs';


createApp(App).use(router).use(store).component(VueFeather.name, VueFeather).component('Breadcrumbs', Breadcrumbs).mount('#app')
