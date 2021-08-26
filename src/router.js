import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/',    name: 'home',   component: require('./pages/Home.vue').default},
        { path: '/details',    name: 'details',   component: require('./pages/Details.vue').default},
        { path: '/details/albums/:userid',    name: 'albums',   component: require('./pages/Albums.vue').default},
    ]
});
