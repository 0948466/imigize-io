import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'

const Faq = () => import('@/components/Faq')
const Instruction = () => import('@/components/Instruction')
const Referral = () => import('@/components/Referral')
const PageNotFound = () => import('@/components/PageNotFound')
const OpenPdf = () => import('@/components/OpenPdf')
const Advisers = () => import('@/components/Advisers')
//
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
      // , offset: { x: 0, y: 10 }
    }
  }
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },

    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },

    {
      path: '/instruction',
      name: 'instruction',
      component: Instruction
    },

    {
      path: '/referral',
      name: 'referral',
      component: Referral
    },

    {
      path: '/wp*',
      name: 'openPdf-wp',
      component: OpenPdf
    },

    {
      path: '/op*',
      name: 'openPdf-op',
      component: OpenPdf
    },

    {
      path: '/documents*',
      name: 'openPdf-documents',
      component: OpenPdf
    },

    {
      path: '/press-release*',
      name: 'openPdf-press-release',
      component: OpenPdf
    },

    {
      path: '/pitch-deck*',
      name: 'openPdf-pitch-deck',
      component: OpenPdf
    },

    {
      path: '/international-advisors/:name?',
      name: 'advisors',
      component: Advisers
    },

    {
      path: '/index.html', redirect: {name: 'homepage'}
    },

    {
      path: '/index-ru.html', redirect: {name: 'homepage'}
    },

    {
      path: '/faq-ru.html', redirect: {name: 'faq'}
    },

    {
      path: '/faq.html', redirect: {name: 'faq'}
    },

    {
      path: '/instructions.html', redirect: {name: 'instruction'}
    },

    {
      path: '/instructions-ru.html', redirect: {name: 'instruction'}
    },

    {
      path: '/referral.html', redirect: {name: 'referral'}
    },

    {
      path: '/referral-ru.html', redirect: {name: 'referral'}
    },

    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    },
  ]
})
