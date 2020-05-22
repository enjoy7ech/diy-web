import bus from '../../bus'
import { loginout } from '@/service/common'

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
    },
    loginOut() {
      loginout().then(data => {
        if (data.code === 0) {
          this.$notify.success('退出登录成功')
          this.$cookies.remove('username')
          this.$cookies.remove('token')
          this.$router.push('/')
        } else {
          this.$notify.error(data.msg)
        }
      })
    }
  }
}
