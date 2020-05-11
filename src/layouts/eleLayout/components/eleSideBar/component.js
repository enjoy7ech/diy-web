// import bus from '../../bus'

export default {
  props: {
    isCollapse: '',
    menus: ''
  },
  data() {
    return {}
  },
  // watch: {
  //   menus () {
  //     console.log(1111)

  //     this.$forceUpdate()
  //   }
  // },
  methods: {
    selectMenu(item) {
      this.$router.push({ path: item.path })
    }
  }
}
