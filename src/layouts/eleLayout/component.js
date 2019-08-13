import header from './components/eleHeader'
import sideBar from './components/eleSideBar'
import footer from './components/eleFooter'
import bus from './bus'
import menus from '../../../data/menu'

export default {
  components: {
    'ele-header': header,
    'ele-side-bar': sideBar,
    'ele-footer': footer
  },
  data () {
    return {
      isCollapse: false,
      userInfo: {
        userName: 'admin'
      },
      showMyInfo: false,
      menus: menus
    }
  },
  mounted () {
    bus.$on('toggle', () => {
      this.isCollapse = !this.isCollapse
    })
    bus.$on('showMyInfo', () => {
      $(this.$refs.sideCover).css('display', 'unset')
      if (this.userInfo.userName) {
        this.showMyInfo = true
      }
    })
    // remoteService.loadUserState()
    //   .then(data => {
    //     this.userInfo = data
    //     this.menus = menus
    //     this.$store.commit('setUserInfo', data)
    //   })
  },
  computed: {
    sideWidth () {
      return this.isCollapse ? '65px' : '250px'
    }
  },
  methods: {
    close () {
      this.showMyInfo = false
    }
  }
}
