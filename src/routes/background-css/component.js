// @flow
// import Parallax from 'parallax-js'
import Vue from 'vue'
let index = 0

export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    waveMove(el, x, y, z) {
      let className = `g-position g-position${z}`
      let style = `top: ${y - 100}px; left:${x - 100}px;z-index: {z}`
      // 函数式编程
      let com = Vue.component('wave', {
        functional: true,
        // Props 是可选的
        props: {
          // ...
        },
        // 为了弥补缺少的实例
        // 提供第二个参数作为上下文
        render: function(h, context) {
          return (
            <div class={className} style={style}>
              <div class="g-center">
                <div class="wave g-wave1"> </div>
                <div class="wave g-wave2"> </div>
                <div class="wave g-wave3"> </div>
                <div class="wave g-wave4"> </div>
              </div>
            </div>
          )
        }
      })

      let instance = new com().$mount()
      $(this.$refs.container).append(instance.$el)

      setTimeout(function() {
        $(`.g-position${z}`).remove()
      }, 3000)
    },
    handleClick(e) {
      let x, y
      // let screenSizeWidth = $('body').width()
      // let screenSizeHeight = $('body').height()
      // let halfvmin = (screenSizeWidth > screenSizeHeight ? screenSizeHeight / 2 : screenSizeWidth / 2) * 0.8

      x = e.pageX
      y = e.pageY

      this.waveMove(this.$refs.container, x, y, index++)
    }
  }
}
