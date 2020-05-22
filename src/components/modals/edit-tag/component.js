import { editTag } from '@/service/dashboard'

export default {
  data() {
    return {
      staticBackdrop: false,
      tag: ''
    }
  },
  mounted() {
    this.tag = this.group_remark
  },
  methods: {
    save() {
      editTag({
        remark: this.tag,
        group_id: this.group_id
      }).then(res => {
        if (res.code === 0) {
          this.$modal.modal('hide')
          this.$promise.resolve()
        } else {
          this.$notify.error(res.msg)
        }
      })
    }
  }
}
