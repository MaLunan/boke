
<template>
    <div class="rightbox" v-if="this.$store.state.width>1100">
        <div class="name">
            <img src="../../static/images/swiper.jpg" alt="">
            <h3>Ma_lunan</h3>
            <span>当你的才华还撑不起你的野心时，你就应该静下心来学习。</span>
            <ul class="mess">
                <li class="iconfont icon-icon1"></li>
                <li class="iconfont icon-weixin"></li>
                <li class="iconfont icon-weibo"></li>
                <li class="iconfont icon-CN_bilibili"></li>
                <li class="iconfont icon-youxiang"></li>
            </ul>
            <div class="tag">
                <router-link to="">
                    <span>105</span>
                    <span>日志</span>
                </router-link>
                <router-link to="">
                    <span>4</span>
                    <span>分类</span>
                </router-link>
                <router-link to="">
                    <span>59</span>
                    <span>标签</span>
                </router-link>
            </div>
        </div>
    </div>


</template>

<script>
export default {
     mounted(){

    },
    props:{
        dataab:{}
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
.rightbox
    width 260px
    padding 20px
    float left 
    margin 0 20px
    .name 
        width 260px
        height 395px
        background-color #fff
        display flex
        flex-direction column
        align-items center
        img 
            height 120px
            width 120px
        h3 
            margin 10px
        span 
            margin 5px
            font-size 14px
            color #999
            text-align center
    .tag 
        display flex
        height 50px
        width 100%
        justify-content center
        margin-top 20px
        a 
            height 50px
            padding 0 10px
            border-right 1px solid rgba(111,111,111,0.2)
            span 
                display block
                margin-bottom 0.5px
        a:nth-of-type(3)
            border none
    .mess 
        display flex
        justify-content space-around
        align-items center
        width 100%
        height 50px    
        li 
            height 40px   
            background-color rgba(0,0,0,.1)
            border-radius 50%
            width 40px  
            text-align center
            line-height 40px
            font-size 24px
            color rgba(0,0,0,.5)
                        

            
</style>