import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import login from '../components/login/login.vue'
/*manage*/
import manage from '../components/manage/manage.vue'

import manageDir from '../components/manage/manageDir.vue'
import dirUpdate from '../components/manage/dirUpdate.vue'
import dirAdd from '../components/manage/dirAdd.vue'

import manageStage from '../components/manage/manageStage.vue'
import stageAdd from '../components/manage/stageAdd.vue'
import stageUpdate from '../components/manage/stageUpdate.vue'

import manageClass from '../components/manage/manageClass.vue'
import classUpdate from '../components/manage/classUpdate.vue'
import classAdd from '../components/manage/classAdd.vue'

import manageStu from '../components/manage/manageStu.vue'
import stuUpdate from '../components/manage/stuUpdate.vue'
import stuAdd from '../components/manage/stuAdd.vue'

import manageTea from '../components/manage/manageTea.vue'
import teaUpdate from '../components/manage/teaUpdate.vue'
import teaAdd from '../components/manage/teaAdd.vue'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/mangage',
      name: 'manage',
      component: manage,
          children:[
              {
                 path:'manageDir',
                 name:'manageDir',
                 component:manageDir
              },
              {
                 path:'dirUpdate',
                 name:'dirUpdate',
                 component:dirUpdate
              },
              {
                  path:'dirAdd',
                  name:'dirAdd',
                  component:dirAdd
              },
              {
                  path:'manageStage',
                  name:'manageStage',
                  component:manageStage
              },
              {
                  path:'stageAdd',
                  name:'stageAdd',
                  component:stageAdd
              },
              {
                  path:'stageUpdate',
                  name:'stageUpdate',
                  component:stageUpdate
              },
              {
                  path:'manageClass',
                  name:'manageClass',
                  component:manageClass
              },
              {
                  path:'classAdd',
                  name:'classAdd',
                  component:classAdd
              },
              {
                  path:'classUpdate',
                  name:'classUpdate',
                  component:classUpdate
              },
              {
                  path:'manageStu',
                  name:'manageStu',
                  component:manageStu
              },
              {
                  path:'stuAdd',
                  name:'stuAdd',
                  component:stuAdd
              },
              {
                  path:'stuUpdate',
                  name:'stuUpdate',
                  component:stuUpdate
              },
              {
                  path:'manageTea',
                  name:'manageTea',
                  component:manageTea
              },
              {
                  path:'teaAdd',
                  name:'teaAdd',
                  component:teaAdd
              },
              {
                  path:'teaUpdate',
                  name:'teaUpdate',
                  component:teaUpdate
              },
          ]
    }
  ]
})
