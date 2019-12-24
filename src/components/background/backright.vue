
<template>
    <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>{{this.$store.state.background.tow}}</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$store.state.background.one}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view></router-view>
        </div>
      </a-layout-content>
      
</template>

<script>
export default {
   
    props:{
    },
    mounted(){
      
    },
    data(){
        return {
       
        }
    },
    methods:{
      
    },

    
      
}
</script>

<style lang="stylus" scoped>
.backright
    width 260px
    padding 20px
    float left 
    margin 0 20px          
</style>