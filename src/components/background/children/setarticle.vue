
<template>
  <div class="setarticle">
      <a-input placeholder="标题" @blur="gettitle"/>
      <!-- 单选分类 -->
   <div>
    <a-select defaultValue="lucy" style="width: 120px;margin-top:20px" @change="handleChange">
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled">Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
  </div>
    <!-- 富文本 -->
     <div id="div1" class="toolbar">
    </div>
    <div id="div2" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        <p>请输入内容</p>
    </div>
    <!-- 点击发布 -->
    <a-button icon="form" id="btn1" @click="showConfirm">发布</a-button>
  </div>
</template>

<script>
import editor from "../../../ditor.js";
export default {
  components: {
    editor
  },
  mounted() {
    editor.create(); //创建富文本
    this.$store.commit("crumbs", {
      //面包屑
      one: "发布文章",
      tow: "文章管理"
    });
  },
  data() {
    return {
      jsonstrpush: "", //富文本内容
      title:'',//标题值
      classify:'默认',//分类


    };
  },
  methods: {
      //选择分类 回调
        handleChange(value) {
        this.classify=value
      },
      //标题回调函数
      gettitle(e){
          this.title=e.target.value
      },
      //确认上传回调函数
       showConfirm() {
        this.jsonstrpush = editor.txt.html();      // 读取 html
        console.log(this.jsonstrpush)
        let _this=this
        this.$confirm({//询问框
          title: '是否要发布文章?',
          content: '当单击OK按钮时，此对话框将在1秒后关闭',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(()=>{
                  console.log(_this)
                  resolve()
              }, 1000);
            }).then(()=>{
                console.log({ 
                    'title':_this.title,//标题值
                    'classify':_this.classify,//分类
                    'jsonstrpush': _this.jsonstrpush, //富文本内容
                                 })
            })
          },
          onCancel() {
              console.log('取消了')
          },
        });
      },
  }
};
</script>

<style lang="stylus" scoped>
.setarticle
    overflow hidden
#btn1
    margin-top 20px
.toolbar 
    border 1px solid #ccc
    margin-top 20px
.text
    border 1px solid #ccc
    height 430px
    margin-top 1px
#btn1
    float right
    overflow hidden
</style>

