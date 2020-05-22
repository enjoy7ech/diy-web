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
  data() {
    return {
      isCollapse: false,
      showMyInfo: false,
      menus: menus
    }
  },
  mounted() {
    bus.$on('toggle', this.toggleMenus)
  },
  computed: {
    sideWidth() {
      return this.isCollapse ? '65px' : '250px'
    }
  },
  methods: {
    close() {
      this.showMyInfo = false
    },
    toggleMenus() {
      this.isCollapse = !this.isCollapse
    }
  }
}
