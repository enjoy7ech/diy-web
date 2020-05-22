import bus from '../../bus'

export default {
  props: {
    isCollapse: ''
  },
  data() {
    return {
      username: '',
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
  mounted() {
    this.username = this.$cookies.get('username')
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
    }
  }
}
