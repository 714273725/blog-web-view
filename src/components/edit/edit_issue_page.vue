<template>
  <div>
    <div id="main">
      <div style="width: 100%;display: flex;align-items: center">
        <input id="title" type="text"
               style="height: 60px;width: 100%;margin-right:5px;font-size: 30px;background: white;border: 0px;
               outline:none;display: inline;vertical-align:middle;"
               maxlength="50"/>
        <span style="height:60px;width: 120px;background: #F6C2B9;line-height: 60px;
        font-size: 30px;text-align: center;color: white;float: inside">发布</span>
      </div>

      <mavon-editor style="min-height: 300px;height: 90vh;" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" @save="$save"
                    v-model="value"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "edit_issue_page",
    methods: {
      // 绑定@imgAdd event
      $imgAdd(pos, $file) {
        // 第一步.将图片上传到服务器.
        var formData = new FormData();
        formData.append('file', $file);
        axios({
          url: 'http://localhost:2022/api/image/upload/issue',
          method: 'post',
          data: formData,
          headers: {'Content-Type': 'multipart/form-data', "token": "test"},
        }).then((response) => {
          // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(pos, "http://localhost:2022/api/" + response.data.data.path);
        })
      },
      //value 原始数据 render html格式数据
      $save(value, render) {
        console.log(value + render)
      }
    }
  }
</script>

<style scoped>

</style>
