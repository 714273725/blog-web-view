<template>
  <div class="position-relative" style="margin:auto;
      width: 50vw;height: 57vw;" v-if="show_image === true">
    <div class="position-absolute"
         style="width: 100%;height: 50vw;background: white;border-radius:1vw;
         -webkit-border-radius: 1vw;-moz-border-radius: 1vw;border-radius: 1vw;
         left: 0vw;top: 7vw;right: 0vw;">
      <!--显示有图布局-->
      <div class="position-relative" style="height: 32vw;margin-left: 1vw;margin-right: 1vw">
        <img src="@/image/bg.jpg" class="position-absolute"
             style="left: 0vw;top: 1vw;width: 100%;height: 31vw"/>
      </div>
      <div style="left: 0;top: 1vw;height: 17vw;
          margin-left: 1vw;margin-right: 1vw">
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
      </div>
    </div>
    <img class="position-absolute" src="@/image/holder.jpg"
         style="width: 10vw;height: 10vw;left: 1vw;top: 2vw;
-webkit-border-radius: 5vw;-moz-border-radius: 5vw;border-radius: 5vw;"/>
  </div>
  <div class="position-relative" style="margin:auto;
      width: 50vw;height: 37vw;" v-else>
    <div class="position-absolute"
         style="width: 100%;height: 30vw;background: white;border-radius:1vw;
         -webkit-border-radius: 1vw;-moz-border-radius: 1vw;border-radius: 1vw;
         left: 0vw;top: 7vw;right: 0vw;">
      <div style="left: 0;top: 1vw;height: 17vw;
          margin-left: 1vw;margin-right: 1vw">
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
        <p>erwerwerewr3333333333333333333333333333333333333333333</p>
      </div>
    </div>
    <img class="position-absolute" src="@/image/holder.jpg"
         style="width: 10vw;height: 10vw;left: 1vw;top: 2vw;
-webkit-border-radius: 5vw;-moz-border-radius: 5vw;border-radius: 5vw;"/>
  </div>
</template>

<script>
  export default {
    name: "art-item-view",
    props: {
      show_image: {
        type: Boolean,
        default: false
      },
      type: {
        type: Number,
        default: 0
      }
    },


    /*/这个属性仅用于示例，实际上没用到*/
    computed: {
      // 我们通过父级传递过来的参数，
      // 来判断该组件需要应用哪些样式
      classObj() {
        let classObj = {};
        // wrap
        if (this.wrap === 'wrap') {
          classObj['flex-wrap'] = true
        } else {
          classObj['flex-nowrap'] = true
        }
        // justify
        switch (this.justify) {
          case 'flex-start':
            classObj['justify-start'] = true;
            break;
          case 'flex-end':
            classObj['justify-end'] = true;
            break;
          case 'center':
            classObj['justify-center'] = true;
            break;
          case 'space-between':
            classObj['justify-space-between'] = true;
            break;
          case 'space-around':
            classObj['justify-space-around'] = true;
            break
        }
        ;

        // align
        switch (this.align) {
          case 'flex-start':
            classObj['align-start'] = true;
            break;
          case 'flex-end':
            classObj['align-end'] = true;
            break;
          case 'center':
            classObj['align-center'] = true;
            break;
          case 'baseline':
            classObj['align-baseline'] = true;
            break;
          case 'stretch':
            classObj['align-stretch'] = true;
            break;
        }
        ;
        return classObj;
      }
    }
  }

</script>

<style scoped>
</style>
