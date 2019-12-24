
<template>
    <a-layout-sider collapsible v-model="collapsed" >
      <div class="logo" title ><p>{{collapsed?'M':'博客后台管理系统'}}</p></div>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline" @click="crumbs">
        <a-menu-item key="1">
          <a-icon type="usergroup-add" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="form" />
          <span>文章管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="book" />
          <span>标签管理</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="solution" />
            <span>评论留言管理</span>
          </span>
          <a-menu-item key="4">评论管理</a-menu-item>
          <a-menu-item key="5">留言管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="tool" />
            <span>账号管理</span>
          </span>
          <a-menu-item key="6">修改资料</a-menu-item>
          <a-menu-item key="7">修改密码</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="sound" />
            <span>系统管理</span>
          </span>
          <a-menu-item key="8">公告管理</a-menu-item>
          <a-menu-item key="9">广告管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

</template>

<script>
export default {
   
    props:{
    },
    mounted(){
      
    },
    
    data(){
        return {
        collapsed: false,
        }
    },
    methods:{
      crumbs(e){
        let tow=''
        
        if(e.key==='4'||e.key==='5'){
          tow='评论留言管理'
        }else if(e.key==='6'||e.key==='7'){
          tow='账号管理'
        }else if(e.key==='8'||e.key==='9'){
          tow='系统管理'
        }else{
          tow=''
        }
        this.$store.commit('crumbs',{
          one:e.item.$el.innerText,
          tow:tow,
          })
        let route=['user','article','tag','discuss','message','setdata','setpas','bbs','advertising',]
        this.$router.push({name:route[e.key-1],params:{},query:{}})
      },
    },

    
      
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color:#6699cc;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  overflow: hidden;
}       
</style>