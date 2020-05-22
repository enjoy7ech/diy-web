/* eslint-disable no-empty */
import Vue from 'vue'
// import Button from 'element-ui/lib/button'
// import Menu from 'element-ui/lib/menu'
// import MenuItem from 'element-ui/lib/menu-item'
// import MenuItemGroup from 'element-ui/lib/menu-item-group'
// import Submenu from 'element-ui/lib/submenu'
import VeeValidate from 'vee-validate'
import ElementUI from 'element-ui'
import appScrollbar from './app-scrollbar'
import appLocalPaser from './app-local-paser'
import _ from 'lodash'

// customized
Vue.component('app-scrollbar', appScrollbar)
Vue.component('app-local-paser', appLocalPaser)

// general
Vue.use(VeeValidate)
Vue.use(ElementUI)

// plugin
let modalComponents = []
let showDialog = (template, data) => {
  return new Promise((resolve, reject) => {
    let Constructor = Vue.extend(template)
    let modal = new Constructor({
      data() {
        return data || {}
      }
    })

    let instance = modal.$mount()
    // $('body').append(instance.$el)
    $(instance.$el).modal('show')
    modalComponents.push(instance)
    instance.$promise = { resolve, reject }
    instance.$modal = $(instance.$el).on('hidden.bs.modal', () => {
      instance.$destroy()
      _.remove(modalComponents, instance)
      console.log(modalComponents)

      if (modalComponents.length) {
        $('body').addClass('modal-open')
      }
      // $(instance.$el).remove()
    })

    // observer
    // let observer = new MutationObserver(mutations => {
    // eslint-disable-next-line no-unused-vars
    // mutations.forEach(mutationRecord => {
    // if ($(instance.$el).css('display') === 'none') {
    // instance.$destroy()
    // $(instance.$el).remove()
    // }
    // })
    // })
    // observer.observe(instance.$el, { attributes: true, attributeFilter: ['style'] })
  })
}

// let observer = (el, attr, callBack) => {
//   let observer = new MutationObserver(mutations => {
//     mutations.forEach(mutationRecord => {
//       callBack()
//     })
//   })
//   observer.observe(el, { attributes: true, attributeFilter: [attr] })
// }

function getDownloadUri(data) {
  const mimeType = 'attachment/csv'
  const charset = ';charset=utf-8,'
  const _utf = '\uFEFF' // 为了使文件以utf-8的编码模式，同时也是解决中文乱码的问题
  return 'data:' + mimeType + charset + _utf + encodeURIComponent(data)
}

function saveData2File(data, fileName) {
  try {
    const element = document.createElement('a')
    let uri = getDownloadUri(data)
    element.href = uri
    element.download = fileName
    const a = document.body.appendChild(element)
    a.click()
    // let evt = document.createEvent('HTMLEvents')
    // evt.initEvent('click', false, false) // 不加后面两个参数在Firefox上报错
    // a.dispatchEvent(evt)
    document.body.removeChild(element)
  } catch (e) {}
}

// 添加实例方法
Vue.prototype.$showDialog = showDialog
// Vue.prototype.$observer = observer
Vue.prototype.$saveData2File = saveData2File
