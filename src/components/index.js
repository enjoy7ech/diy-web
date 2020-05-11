import Vue from 'vue'
// import Button from 'element-ui/lib/button'
// import Menu from 'element-ui/lib/menu'
// import MenuItem from 'element-ui/lib/menu-item'
// import MenuItemGroup from 'element-ui/lib/menu-item-group'
// import Submenu from 'element-ui/lib/submenu'
import VeeValidate from 'vee-validate'
import ElementUI from 'element-ui'
import appScrollbar from './app-scrollbar'

// customized
Vue.component('app-scrollbar', appScrollbar)

// general
Vue.use(VeeValidate)
Vue.use(ElementUI)

// plugin
let showDialog = (template, data) => {
  return new Promise((resolve, reject) => {
    let Constructor = Vue.extend(template)
    let modal = new Constructor({
      data() {
        return data || {}
      }
    })

    let instance = modal.$mount()
    $('body').append(instance.$el)
    instance.$promise = { resolve, reject }
    // observer
    let observer = new MutationObserver(mutations => {
      // eslint-disable-next-line no-unused-vars
      mutations.forEach(mutationRecord => {
        if ($(instance.$el).css('display') === 'none') {
          instance.$destroy()
          $(instance.$el).remove()
        }
      })
    })
    observer.observe(instance.$el, { attributes: true, attributeFilter: ['style'] })
  })
}

let observer = (el, attr, callBack) => {
  let observer = new MutationObserver(mutations => {
    // eslint-disable-next-line no-unused-vars
    mutations.forEach(mutationRecord => {
      callBack()
    })
  })
  observer.observe(el, { attributes: true, attributeFilter: [attr] })
}
// 添加实例方法
Vue.prototype.$showDialog = showDialog
Vue.prototype.$observer = observer
