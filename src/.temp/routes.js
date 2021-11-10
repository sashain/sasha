const c1 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/Services.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--learning-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/Learning.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blogs-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/Blogs.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/haoyinghui/Documents/sasha/src/pages/Index.vue")

export default [
  {
    path: "/services/",
    component: c1
  },
  {
    path: "/learning/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/blogs/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
