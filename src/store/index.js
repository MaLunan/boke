import Vue from 'vue'
import Vuex from 'vuex'
import background from './background.js'
Vue.use(Vuex)
const createStore=new Vuex.Store({
        state:{
            cs:'测试',
            width:2000,
            height:2000,
        },//相当于data 存储数据
        actions:{//异步行为事件
            
        },
        mutations:{//修改数据状态  同步
            size(state,num){
                state.width=num.width
                state.height=num.height
            }
        },
        getters:{//计算属性
                
        },
        modules:{//分模块管理
            background,
        }
    })


export default createStore