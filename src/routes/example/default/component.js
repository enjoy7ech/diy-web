import exampleService from '../../../service/example'
export default {
  data() {
    return { example: '' }
  },
  mounted() {
    exampleService.test().then(data => {
      this.example = data.name
    })
  }
}
