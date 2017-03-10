// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import NProgress from 'vue-nprogress'
import App from './App'
import router from './router'

Vue.use(NProgress)
const nprogress = new NProgress({ parent: '.nprogress-container' })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    nprogress,
    router,
    template: '<App/>',
    components: { App }
})
