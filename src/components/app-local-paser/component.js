import { parse as csvparse } from 'papaparse'

export default {
  methods: {
    showUpload() {
      $(this.$refs.uploader).trigger('click')
    },
    upload(e) {
      let self = this
      const fileInfo = e.target.files[0]
      if (fileInfo) {
        this.fileName = fileInfo.name
        var reader = new FileReader() //这是核心,读取操作就是由它完成.
        reader.readAsText(fileInfo) //读取文件的内容,也可以读取文件的URL
        reader.onload = function() {
          self.$emit('fetchData', csvparse(this.result))
        }
      }
    }
  }
}
