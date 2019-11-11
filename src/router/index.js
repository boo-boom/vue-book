import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "testPage" */ '@/views/TestPage.vue')
  },
  {
    path: '/testRouter',
    name: 'testRouter',
    component: () => import(/* webpackChunkName: "testRouter" */ '@/views/TestRouter.vue')
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
    redirect: '/test'
  }
]

const router = new VueRouter({
  routes
})

export default router
