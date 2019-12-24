
<template>
     <footer>
         <div class="time">本站已正常运行<span>{{newtime}}</span></div>
         <div class="intro">
            <span>&copy;Ma_lunan版权所有</span>
            <span>基于vue构建</span>
            <span>托管于腾讯云主机</span>
            <span @click="beian">京ICP备19053813号-1</span>
         </div>
         <div>
             <span>站长统计 | </span>
             <span>小站历史流量【<em>100</em>】</span>
         </div>
    </footer> 
</template>

<script>
export default {
     mounted(){
       const _this=this
         setInterval(function(){
             _this.time()
         },1000)
         
    },
    props:{
        dataab:{}
    },
    data(){
        return {
            newtime:""
        }
    },
    methods:{
      time(){
            let date1= '2019/10/21 00:00:00';  //开始时间  
            let date2 = new Date();    //结束时间  
            let date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数        
            //计算出相差天数  
            let days=Math.floor(date3/(24*3600*1000))  
            //计算出小时数  
            let leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数  
            let hours=Math.floor(leave1/(3600*1000))  
            //计算相差分钟数  
            let leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
            let minutes=Math.floor(leave2/(60*1000))  
            //计算相差秒数  
            let leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数  
            let seconds=Math.round(leave3/1000)      
            this.newtime=days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒"    
      },
      beian(){
          window.location.href='http://beian.miit.gov.cn/'
         
      }
    },

    
      
}
</script>

<style lang="stylus" scoped>
    footer
        width 100%
        height 150px
        background-color #232323
        display flex
        flex-direction column
        justify-content center 
        align-items center
        color #eee
        font-size 14px
        text-align center
        .intro span::after 
            content:"|"
            clear:both
            height:14px;
            padding 0 5px
            overfolw:hidden;
        .intro span:nth-of-type(4)::after 
            content:""
            clear:both
            height:14px;
            padding 0 5px
            overfolw:hidden;   
        .intro span:nth-of-type(4)
            cursor pointer

</style>