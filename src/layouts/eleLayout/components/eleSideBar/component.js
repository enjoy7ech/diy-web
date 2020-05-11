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
  mounted() {
    console.log(this.$refs.menu)

    this.$refs.menu.activeIndex = this.$route.path
  },
  methods: {
    selectMenu(item) {
      this.$router.push({ path: item.path })
    }
  }
}
