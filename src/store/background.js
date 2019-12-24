const background={
        state:{//相当于data 存储数据
            one:'用户管理',//left面包屑数据
            tow:''
        },
        mutations:{//修改数据状态  同步
            crumbs(state,num){
                console.log(num)
                state.one=num.one
                state.tow=num.tow
            }
        },
        actions:{//异步行为事件
    
        },
        getters:{//计算属性
        
        },
    }


export default background