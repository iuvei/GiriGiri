import Vue from 'vue';
import Router from 'vue-router';

import Home from 'components/home/home';
import HomeDetail from 'components/home-detail/home-detail';
import Search from 'components/search/search';
import User from 'components/user/user';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/0',
    },
    {
      path: '/home',
      redirect: '/home/0',
      component: Home,
      children: [
        { path: ':rid', component: HomeDetail }
      ]
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/user',
      component: User,
    },
  ]
});
