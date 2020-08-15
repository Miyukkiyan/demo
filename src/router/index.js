import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Cascader from '@/components/El-cascader'
import Table from '@/components/el-tale'
import cutDown from '@/components/cutDown/index'
import percent from '@/components/layout/percent'
import quill from '@/components/editor/quill'
import wangEditor from '@/components/editor/wangEditor'
import heightLight from '@/components/heightLight'
import tableFold from '@/components/tableFold'
import svg from '@/components/svg'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/cascader',
      name: 'Cascader',
      component: Cascader
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/cutDown/index',
      name: 'cutDown',
      component: cutDown
    },
    {
      path: '/layout/percent',
      name: 'percent',
      component: percent
    },
    {
      path: '/editor/quill',
      name: 'quill',
      component: quill
    },
    {
      path: '/editor/wangEditor',
      name: 'wangEditor',
      component: wangEditor
    },
    {
      path: '/heightLight',
      name: 'heightLight',
      component: heightLight
    },
    {
      path: '/tableFold',
      name: 'tableFold',
      component: tableFold
    },
    {
      path: '/svg',
      name: 'svg',
      component: svg
    }
  ]
})
