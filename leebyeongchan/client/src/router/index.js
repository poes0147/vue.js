import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'
import BoardList from '@/views/BoardList.vue'
import BoardAdd from '@/views/BoardAdd.vue'
import BoardInfo from '@/views/BoardInfo.vue'
import BoardUpdate from '@/views/BoardUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {name : 'MainComponent'}
  },
  {
    path: '/MainComponent',
    name: 'MainComponent',
    component: MainComponent
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/BoardAdd',
    name: 'BoardAdd',
    component: BoardAdd
  },
  {
    path: '/BoardInfo',
    name: 'BoardInfo',
    component: BoardInfo
  },
  {
    path: '/BoardUpdate',
    name: 'BoardUpdate',
    component: BoardUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
