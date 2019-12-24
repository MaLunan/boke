import Vue from "vue";//vue
import App from "./App.vue"//app.vue
import Router from 'vue-router'//路由
import router from '../src/router/index'//路由配置项
import Mintui from 'mint-ui'//手机组件
import 'mint-ui/lib/style.css'//组件样式
import './flexble'//rem函数
import './publiccss.css'//公共css
import './static/font/headerfont/iconfont.css'//阿里图标库
import axios from 'axios'//代理
import Vuex from 'vuex'
import store from './store/index'
import "./static/images/swiper1.jpg"
import "./static/images/zhu.gif"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import wangeditor from 'wangeditor'
// import '../node_modules/wangeditor/release/wangEditor.min.js'
Vue.prototype.$axios=axios
    
Vue.use(Router)
Vue.use(Mintui)
Vue.use(Vuex)
Vue.use(Antd)
// Vue.use(Wangeditor)
const app = new Vue({
    router,
    store,
    render(h) {
        return h(App)
    }
}).$mount("#app")