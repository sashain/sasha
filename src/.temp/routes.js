const c1 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/keerti/Keerti/sasha/src/pages/Services.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/keerti/Keerti/sasha/src/pages/Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/keerti/Keerti/sasha/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/keerti/Keerti/sasha/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/keerti/Keerti/sasha/src/pages/Index.vue")

export default [
  {
    path: "/services/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
