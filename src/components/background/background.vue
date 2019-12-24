
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <Backleft/>
    
    <a-layout>
    <Backheader/>
     <Backright/>
      
        <a-layout-footer style="text-align: center">
            <span>&copy;Ma_lunan版权所有</span>  
            <span>基于vue构建</span>
            <span>托管于腾讯云主机</span>
            <span @click="beian">京ICP备19053813号-1</span>
        </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Backleft from "./backleft.vue";
import Backheader from "./backheader.vue";
import Backright from "./backright.vue";
export default {
  components: {
    Backheader,
    Backleft,
    Backright,
  },
  props: {},
  mounted() {
    this.$emit("appshow", {
      showheader: false,
      nav: false,
      footer: false
    });
  },
  data() {
    return {
     
    };
  },
  methods: {
    beian(){
          window.location.href='http://beian.miit.gov.cn/'
         
      }
  },
  destroyed(){
    this.$emit("appshow", {
      showheader: true,
      nav: true,
      footer: true
    });
  }
};
</script>

<style scoped>
span:nth-of-type(4){
 cursor: pointer;
 color:#333
}
span{
  margin-left: 5px
}
</style>