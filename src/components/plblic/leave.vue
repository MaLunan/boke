<template>
  <div class="leave">
      <div class="content">
          '哈哈哈'
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.leave 
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