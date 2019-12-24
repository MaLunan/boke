
<template>
   <a-layout-header class="header">
     <a-button icon='home' size='large' type="link" ghost @click='back'>回到博客</a-button>
     <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"><a-icon type="team" />切换用户</a-menu-item>
        <a-menu-item key="2"><a-icon type="key" />修改密码</a-menu-item>
        <a-menu-item key="3"><a-icon type="poweroff" />注销登录</a-menu-item>
      </a-menu>
      <a-button class="bth"  >用户名<a-icon type="down" /> </a-button>
    </a-dropdown>
      </a-layout-header>
</template>

<script>
export default {
   
    props:{
    },
    mounted(){

    },
    data() {
      return {
      };
    },
    methods: {
    handleMenuClick(e) {
        console.log('click', e);
      },
    back(e){
      this.$router.push({path:"/"})
    }
    }

    
      
}
</script>

<style scoped>
.header{
position: relative;
}
.bth{
  margin-left: 8px;
  right:80px;
  position:absolute;
  top: 50%;
  transform:translateY(-50%)
}
</style>