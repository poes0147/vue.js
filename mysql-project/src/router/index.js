import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import CustomerUpdate from '@/views/CustomerUpdate.vue'

const routes = [
  {
    path: '/',
    redirect: {name :'CustList'}
  },
  {
    path: '/CustomerList',
    name: 'CustList',
    component: CustomerList
  },
  {
    path: '/CustomerInfo',
    name: 'CustInfo',
    component: CustomerInfo
  },
  {
    path: '/CustomerAdd',
    name: 'CustAdd',
    component: CustomerAdd
  },
  {
    path: '/CustomerUpdate/:custId',
    name: 'CustUpdate',
    component: CustomerUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
