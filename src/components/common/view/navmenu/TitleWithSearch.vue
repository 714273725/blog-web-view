<template>
  <div id="title_container" class="container">
    <div id="small_menu" class="container" style="display: none">我是小标题栏</div>
    <div id="middle_menu" style="display: none">我是中标题栏</div>
    <div id="large_menu" style="display: none">我是大标题栏</div>
    <label id="show"></label>
    <script id="editor" type="text/plain"></script>
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
  export default {
    name: "title-with-search",
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
  //在窗口加载时回调此方法
  window.onload = function () {
    var title = document.getElementById("title_container");
    title.style.height = title.offsetWidth * 0.07 + "px";
  }
  //在窗口大小改变时回调此方法
  window.onresize = function () {
    var width;
    //获取窗口宽度
    if (window.innerWidth)
      width = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
      width = document.body.clientWidth;

    var titleS = window.document.getElementById("small_menu");
    var titleM = window.document.getElementById("middle_menu");
    var titleL = window.document.getElementById("large_menu");
    var show = window.document.getElementById("show");
    show.innerHTML = width + "px";
    if (width >= 720) {
      titleL.setAttribute("style", "display");
      titleS.setAttribute("style", "display:none");
    } else {
      titleS.setAttribute("style", "display");
      titleL.setAttribute("style", "display:none");
    }
  }
</script>

<style scoped>

  @media screen and (min-width: 500px) {
    .container {
      background: #34ce57;
    }
  }

  @media screen and (min-width: 900px) {
    .container {
      background: #0062cc;
    }
  }

  .container {

  }
</style>
