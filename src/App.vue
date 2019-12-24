
<template>
    <div class="app">
    <Header v-if="showheader"/>
    <Nav v-if="shownav"/>
    <router-view @appshow="appshow"></router-view>
    <Footer v-if="showfooter"/>
    </div>
</template>

<script>
const Header=()=>import('./views/header.vue')
const Nav =()=>import ('./views/nav.vue')
const Footer =()=>import ('./views/footer.vue')
export default {
   components:{
       Header,
       Footer,
       Nav,
   },
    mounted(){
        window.addEventListener('resize',this.windowsize)
    },
   data(){
       return {
           showheader:true,
           shownav:true,
           showfooter:true,
       }
   },
   methods:{
        windowsize(){
                    const width=document.documentElement.clientWidth
                    const height=document.documentElement.clientHeight 
                    this.$store.commit('size',{
                        width:width,
                        height:height
                    })           
                },
        appshow(data){
            this.showheader=data.showheader
            this.shownav=data.nav
            this.showfooter=data.footer
        }
   },
}
</script>

<style lang="stylus" scoped>
    .app 
        width 100%
        height 100%

</style>