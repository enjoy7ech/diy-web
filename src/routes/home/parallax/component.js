// @flow
import Parallax from 'parallax-js'

export default {
  data () {
    return {
      parallaxInstance: {}
    }
  },
  mounted () {
    var scene = this.$refs.scene
    this.parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      // 属性：originX＆originY
      // 属性：data-origin-x＆data-origin-y
      // 方法：origin（x，y）

      // 值：浮点值介于0和1之间
      // 默认值：0.5

      // 鼠标输入的X和Y原点。默认值0.5表示屏幕或元素的中心，0表示左（X轴）或上（Y轴）边框，1表示右侧或底部。
      // 使用陀螺仪时无效。
      originX: 0,
      originY: 0.5,
      // 摩擦力
      frictionX: 0.1,
      frictionY: 0.1,
      //       属性：scalarX＆scalarY
      // 属性：数据标量-X ＆数据标量-Y
      // 方法：标量（X，Y）

      // 值：float
      // 默认值：10.0

      // 将输入运动乘以此值，增大或减小移动速度和范围。
      scalarX: 20,
      scalarY: 5
      // clipRelativeInput: true,
      // hoverOnly: true // 只有当光标位于场景元素上时，视差才会生效，否则所有图层都会移回其初始位置。
    })
  },
  methods: {

  }
}
