
<template>
      <header>
        <div class="nav">
          <h1><router-link to="/background/user" v-if="this.$store.state.width>=1100||this.$store.state.width<840">Ma_lunan</router-link></h1>
          <ul v-if="this.$store.state.width>=840">
            <li>
              <router-link to="/"  @click.native="returnTop"><i class="iconfont icon-shouye"></i>首页</router-link>
            </li>
            <li>
              <router-link to="/" @click.native="returnTop"><i class="iconfont icon-44"></i>生活笔记</router-link>
            </li>
            <li>
              <router-link to="/" @click.native="returnTop"><i class="iconfont icon-programmingwindo"></i>技术分享</router-link>
            </li>
            <li>
              <router-link to="/" @click.native="returnTop"><i class="iconfont icon-liuyan2"></i>留言板</router-link>
            </li>
            <li>
              <router-link to="/" @click.native="returnTop"><i class="iconfont icon-daocha"></i>赞助作者</router-link>
            </li>
            <li>
              <router-link to="/" @click.native="returnTop"><i class="iconfont icon-guanyuwo"></i>关于博主</router-link>
            </li>
            <li v-if="this.$store.state.width>1100">
              <input type="text" placeholder="站内搜索"><i class="iconfont icon-sousuo"></i>
            </li>
          </ul>
        </div>
      </header>
</template>

<script>
export default {
     mounted(){
      
    },
    props:{
      
    },
    data(){
        return {
       
        }
    },
    methods:{
      returnTop:function(){//box锚点实现定位+动画
        const box=document.querySelector("#box")
        const boxtop=box.offsetTop
        let s=0
        let ds=setInterval(function(){
          let scroll=document.documentElement.scrollTop
          s+=(boxtop-scroll)/8
          document.documentElement.scrollTop=Math.ceil(s)
          if(document.documentElement.scrollTop===boxtop){
              clearInterval(ds)
          }
        },10)  
      }
  }

    
      
}
</script>

<style lang="stylus" scoped>
a 
  color #fff
input 
  width 100px
  color rgba(40,42,44,0.6)
  border none
  outline none 
  padding 0 10px 0 10px
  margin-left 20px
  border-radius 10px 10px 10px 10px
  line-height 25px
header 
  position absolute
  min-width 540px
  top 0px
  background-color rgba(40,42,44,0.6)
  height 50px
  color #fff
  width 100%
  z-index 100
  .nav
    display flex
    height 100%
    width 80%
    line-height 50px
    margin 0 auto
    justify-content center
    h1 
      margin-right 150px
      width 1px
    ul
      display flex
      justify-content space-around
      width 800px
      font-size 14px
      li
        float left
        >i 
          padding 0 0px 0 10px
          font-size 16px
      li:nth-of-type(7) i
        cursor pointer
        a
          display block
          height 50px
          i
            padding 0 5px 0 5px
            font-size 16px
</style>