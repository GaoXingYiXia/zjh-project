import Vue from 'vue'
import Router from 'vue-router'

// import index from '@/components/index'


//------------------------路由懒加载--------------------------------------------------------
const index=()=>import(/* webpackChunkName: "index" */ "@/components/index");
const Account=()=> import( /* webpackChunkName: "Account" */   '@/components/Account-modification')
const Activity = () => import( /* webpackChunkName: "Activity" */ '@/components/Activity-page')
const details = () => import( /* webpackChunkName: "details" */ '@/components/Cash-back-details')
const back = () => import( /* webpackChunkName: "back" */ '@/components/Cash-back')
const Classification = () => import( /* webpackChunkName: "Classification" */ '@/components/Classification')
const Hefei = () => import( /* webpackChunkName: "Hefei" */ '@/components/Hefei-area')
const Hot = () => import( /* webpackChunkName: "Hot" */ '@/components/Hot-pro')
const Invitation = () => import( /* webpackChunkName: "Invitation" */ '@/components/Invitation-Award')
const Museum = () => import( /* webpackChunkName: "Museum" */ '@/components/Maternal-Museum')
const Collection = () => import( /* webpackChunkName: "Collection" */ '@/components/My-Collection')
const comments = () => import( /* webpackChunkName: "comments" */ '@/components/My-comments')
const footprints = () => import( /* webpackChunkName: "footprints" */ '@/components/My-footprints')
const My = () => import( /* webpackChunkName: "My" */ '@/components/My')
const pieces = () => import( /* webpackChunkName: "pieces" */ '@/components/Nine-pieces')
const Service = () => import( /* webpackChunkName: "Service" */ '@/components/Online-Service')
const Registration = () => import( /* webpackChunkName: "Registration" */ '@/components/Registration-area')
const password = () => import( /* webpackChunkName: "password" */ '@/components/Retrieve-password')
const Search = () => import( /* webpackChunkName: "Search" */ '@/components/Search-page')
const Seckill = () => import( /* webpackChunkName: "Seckill" */ '@/components/Seckill')
const Settings = () => import( /* webpackChunkName: "Settings" */ '@/components/Settings')
const Cart = () => import( /* webpackChunkName: "Cart" */ '@/components/Shopping-Cart')
const Sign = () => import( /* webpackChunkName: "Sign" */ '@/components/Sign-in')
const Register = () => import( /* webpackChunkName: "Register" */ '@/components/Register')
const Redpackage = () => import( /* webpackChunkName: "Redpackage" */ '@/components/Red-package')
const Change = () => import( /* webpackChunkName: "Change" */ '@/components//Change-password')







Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [{
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/Account-modification',
      name: 'Account',
      component: Account
    },
    {
      path: '/Activity-page',
      name: 'Activity',
      component: Activity,
      children: [{
        path: '/Activity-page1/:id',
        component: Activity,
      }]
    }, {
      path: '/details',
      name: 'details',
      component: details
    }, {
      path: '/Cash-back',
      name: 'back',
      component: back,
      children:[{
        path: '/Cash-back1/:id', component: back,
      }]
    }, {
      path: '/Classification',
      name: 'Classification',
      component: Classification
    }, {
      path: '/Hefei-area',
      name: 'Hefei',
      component: Hefei
    }, {
      path: '/Hot-pro',
      name: 'Hot',
      component: Hot,
      children: [{
        path: '/Hot-pro1/:id',
        component: Hot,
      }]
    }, {
      path: '/Invitation-Award',
      name: 'Invitation',
      component: Invitation
    }, {
      path: '/Maternal-Museum',
      name: 'Museum',
      component: Museum
    }, {
      path: '/My-Collection',
      name: 'Collection',
      component: Collection,
      children: [{
        path: '/My-Collection1/:id',
        component: Collection,
      }]
    }, {
      path: '/My-comments',
      name: 'comments',
      component: comments
    }, {
      path: '/My-footprints',
      name: 'footprints',
      component: footprints
    }, {
      path: '/My-i',
      name: 'My',
      component: My
    }, {
      path: '/Nine-pieces',
      name: 'pieces',
      component: pieces,
      children: [{
        path: '/Nine-pieces1/:id',
        component: pieces,
      }]
    }, {
      path: '/Online-Service',
      name: 'Service',
      component: Service
    }, {
      path: '/Registration-area',
      name: 'Registration',
      component: Registration
    }, {
      path: '/Retrieve-password',
      name: 'password',
      component: password
    }, {
      path: '/Search-page',
      name: 'Search',
      component: Search
    }, {
      path: '/Seckill',
      name: 'Seckill',
      component: Seckill,
      children: [{
        path: '/Seckill1/:id',
        component: Seckill,
      }]
    }, {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    }, {
      path: '/Shopping-Cart',
      name: 'Cart',
      component: Cart
    }, {
      path: '/Sign-in',
      name: 'Sign',
      component: Sign
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }, {
      path: '/Red-package',
      name: 'Redpackage',
      component: Redpackage
    }, {
      path: '/Change-password',
      name: '/Change',
      component: Change
    },
    {
      path: '/',
      redirect: '/index'
    },
  ]
})
