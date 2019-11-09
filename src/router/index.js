import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: () => import(/* webpackChunkName: "ebook" */ '@/views/ebook/index.vue'),
    children: [
      {
        path: ':fileName',
        name: 'ebookReader',
        component: () => import(/* webpackChunkName: "ebookReader" */ '../components/ebook/EbookReader.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/ebook'
  }
]

const router = new VueRouter({
  routes
})

export default router
