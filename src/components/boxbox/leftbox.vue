
<template>
    <div class="leftbox">
        <div class="pushbox" v-for="i in 2" :key='i'>
            <h2>最新文章</h2>
            <div class="content" v-for="n in 4" :key='n'>
                <h1>如何分离 Git 子目录</h1>
                <div class="centre">
                    <img src="../../static/images/swiper1.jpg" alt="">
                    <span>
                        最近工作遇到了一个问题。对我们公司的开发小组来说，整个小组的人员都在一个 
                        Repository 下面协作，这个 Repository 里面的文件夹非常多，而我只负责其中的一个功能的开发，
                        我开发的功能所在的文件夹是可以独立维护的，它不依赖于 Repository 里面的其他的任何一
                        最近工作遇到了一个问题。对我们公司的开发小组来说，整个小组的人员都在一个 
                    </span>
                    <div class="biaoqian">标签哈哈</div>
                </div>
                <div class="footer">
                    <div class="footbox">
                        <p>
                            <i class="iconfont icon-ai59"></i>
                            <router-link to="">mlunan</router-link>
                        </p>
                        <p>
                            <i class="iconfont icon-shijian"></i>
                            <span> 2019-11-18 20:32</span>
                        </p>
                        <p>
                            <i class="iconfont icon-kanguo1"></i>
                            <span><b>1705</b>浏览</span>
                        </p>
                        <p> 
                            <i class="iconfont icon-xiaoxi"></i>
                            <router-link to=""><b>17</b>评论</router-link>
                        </p>
                        <p>
                            <i class="iconfont icon-like-line"></i>
                            <span><b>22</b>喜欢</span>
                        </p>  
                    </div>
                </div>
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
.leftbox
    width 760px
    float left  
    padding 0 20px
    .pushbox
        width 100%
        padding 20px
        margin 20px 0
        background-color #fff
        h2 
            border-left 3px solid green
            padding-left 20px  
            font-size 24px
            cursor pointer 
            color #333
        .content
            padding 20px 15px 10px 20px
            box-sizing border-box
            width 100%     
            h1 
                cursor pointer
                color rgba(22,22,22,0.7)
            .centre
                height 150px
                width 100%
                display flex
                margin-top 10px
                position relative
                .biaoqian 
                    position absolute
                    top 4px
                    left -14px
                    width 70px
                    height 30px
                    color #cc4d7d
                    font-weight bold
                    background-color #97dffd
                    font-size 14px
                    border-radius: 0 4px 4px 0
                    text-align center
                    line-height 30px
                .biaoqian::after 
                        position: absolute
                        content ""
                        top 100%
                        left 0
                        color #444
                        border-top 0 solid transparent
                        border-right-width 1em
                        border-right-color inherit
                        border-right-style solid
                        border-bottom 1em solid transparent
                        border-left 0 solid transparent
                        width 0
                        height 0
                img 
                    height 100%
                    width 250px
                    cursor pointer
                span 
                    display block
                    flex 1
                    padding-left 20px
                    font-size 14px
                    color #555
                    overflow hidden
                    margin-bottom 32px
            .footer 
                height 30px
                margin-top 5px
                .footbox 
                    height 100%
                    float right
                    display flex
                    justify-content space-around
                    p 
                        display flex
                        justify-content space-around 
                        align-items center
                        font-size 14px
                        a 
                            color #72d0eb
                        i 
                            font-size 18px
                            color #888
                            font-weight bold
                            padding 0 2px
                    p:nth-of-type(1) i 
                        font-size 24px
                    p:nth-of-type(3) span b 
                        color #f78585
                     p:nth-of-type(3) i
                        font-size 24px
                    p:nth-of-type(4) a b
                        color #f78585
                    p:nth-of-type(5) span b
                        color #f78585
                    p:nth-of-type(5) i 
                        color red
                        cursor pointer
                        font-size 24px



            
</style>