
<template>
      <nav :class="{active : this.$store.state.width<840 }">
            <div class="navbox">
                <div class="font" :class="{activv:this.$store.state.width<840}">
                    <span>H</span>
                    <span>i</span>
                    <span>,</span>
                    <span>f</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                </div> 
                <div class="title" v-if="this.$store.state.width>840">
                    <i>
                        <img src='../static/images/swiper1.jpg' alt="">
                    </i>
                    <div class="mess">
                        <span>写代码是热爱，</span>
                        <span>写到世界充满爱！</span>
                    </div>
                </div>
            </div>
            <div class="zhu" :class="{activezhu:zhu==true}" @click="returnTop" v-if="this.$store.state.width>840">
                <img src='../static/images/zhu.gif' alt="">
            </div>
      </nav>
</template>

<script>

export default {
     mounted(){
         window.addEventListener('scroll',this.zhuf)
        //  this.get()
    },
    props:{
        dataab:{},
    },
    data(){
        return {
            zhu:false,
        }
    },
    methods:{
        returnTop:function(){
        let s=0
        let ds=setInterval(function(){
          let scroll=document.documentElement.scrollTop
          s=scroll/15
          document.documentElement.scrollTop=Math.floor(scroll-s)
          if(document.documentElement.scrollTop===0){
              clearInterval(ds)
          }
        },10)  
      },
        zhuf(){
            let scroll=document.documentElement.scrollTop
            const box=document.querySelector("#box")
            const boxtop=box.offsetTop
            const zhu=document.querySelector('.zhu')
            if(zhu){
                if(scroll<boxtop+200-0){
                    this.zhu=false  
                }else{
                    this.zhu=true       
                }
            }
            
        },
    //   get(){
    //        this.$axios('/api',{
    //           params:{
    //             client:'web',
    //             page:1,
    //             per_page:3,
    //           }
    //       }).then(res=>{
    //           console.log(res.data)
    //       }).catch(err=>{
    //           console.log(err)
        //   })
    //   }
    },

    
      
}
</script>

<style lang="stylus" scoped>
    .active
        height 200px 
    nav 
        height 600px 
        width 100%   
        .navbox
            height 100%
            width 100%
            background url('../static/images/swiper.jpg') no-repeat center center
            background-size auto 120% 
            position relative
            .font 
                font-family "STCaiyun"
                position absolute
                top 50%
                left 50%
                transform translateX(-50%) translateY(-50%) 
                display flex
                justify-content space-around
                width 500px
                font-size 100px
                cursor pointer
                span   
                    color #999
                    text-shadow 2px 2px 0 green, -1px -1px 0 #fff
            .activv 
                font-size 50px
                width 250px
            .title
                width 70%
                position absolute
                bottom -136px
                height 250px
                background-color rgba(222,222,222,0.5)
                left 50%
                transform translateX(-50%)
                display flex
                flex-direction column
                justify-content center
                align-items center
                i 
                    width 100px
                    height 100px
                    border-radius 50%
                    overflow hidden
                    display block
                    cursor pointer
                    img 
                        width 100%
                        height 100%
                .mess 
                    font-size 24px
                    margin-top 10px
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    span:nth-of-type(1)
                        color #00a7e0!important 
                     span:nth-of-type(2)
                        color #ff3f1a!important
        .zhu 
            position fixed
            bottom 1000px
            right 70px
            height 900px
            width 70px
            cursor pointer
            transition all 1s ease-out
            z-index 100
        .activezhu 
            bottom 80px

            
</style>