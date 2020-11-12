import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _571c3c03 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _778f47e4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _767b10f6 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _571c3c03,
    name: "prismic-preview"
  }, {
    path: "/",
    component: _778f47e4,
    name: "index"
  }, {
    path: "/:uid",
    component: _767b10f6,
    name: "uid"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
