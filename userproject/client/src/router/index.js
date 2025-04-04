import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '@/views/UserList.vue'
import UserAdd from '@/views/UserAdd.vue'
import UserInfo from '@/views/UserInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : {name : 'UserList'}
  },
  {
    path: '/UserList',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/UserAdd',
    name: 'UserAdd',
    component: UserAdd
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
