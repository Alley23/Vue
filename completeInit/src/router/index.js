import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Music from '../views/Music'
import New from '../views/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'music',
          name: 'music',
          component: Music,
        },
        {
          path: 'new',
          name: 'new',
          component: New,
        }
      ]
    }
  ]
})
