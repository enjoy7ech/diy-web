import bus from '../../bus'

export default {
  props: {
    isCollapse: '',
    data: {}
  },
  data() {
    return {
      pageTitle: this.$route.meta.pageTitle,
      pageSubTitle: this.$route.meta.pageSubTitle
    }
  },
  watch: {
    $route(from, to) {
      if (from !== to) {
        this.pageTitle = this.$route.meta.pageTitle
        this.pageSubTitle = this.$route.meta.pageSubTitle
      }
    }
  },
  methods: {
    toggle() {
      bus.$emit('toggle')
    },
    showMyInfo() {
      bus.$emit('showMyInfo')
    },
    handleCommand(command) {
      command.func()
    },
    loginOut() {}
  }
}
