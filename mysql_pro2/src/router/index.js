import { createRouter, createWebHistory } from 'vue-router'
import employeesList from '@/views/employeesList.vue'
import employeesInfo from '@/views/employeesInfo.vue'
import employeesUpdate from '@/views/employeesUpdate.vue'
import employeesAdd from '@/views/employeesAdd.vue'
// import HomeView from '../views/employeesAdd.vue'

const routes = [
  {
    path: '/',
    redirect: {name : 'empList'}
  },
  {
    path: '/employeesList',
    name: 'empList',
    component: employeesList
  },
  {
    path: '/employeesInfo',
    name: 'empInfo',
    component: employeesInfo
  },
  {
    path: '/employeesAdd',
    name: 'empAdd',
    component: employeesAdd
  },
  {
    path: '/employeesUpdate',
    name: 'empUpdate',
    component: employeesUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
