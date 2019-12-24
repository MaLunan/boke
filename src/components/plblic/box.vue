
<template>
     <div id="box">
         <div class="content">
            <Leftbox/>
            <Rightbox/>
        </div>
     </div>
</template>

<script>
import Rightbox from '../boxbox/rightbox.vue'
import Leftbox from '../boxbox/leftbox.vue'
export default {
    components:{
        Rightbox,
        Leftbox,
    },
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
    #box
        width 100%
        margin 100px 0 0 0
        background-color rgba(0,0,0,.1)
        .content 
            display flex
            justify-content center
            margin 0 auto
            overflow hidden
        .content::after 
            content ""
            display block
            clear both
            height 0px
            overfolw hidden        

            
</style>