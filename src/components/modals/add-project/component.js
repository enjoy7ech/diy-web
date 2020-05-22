import { addGroup } from '@/service/group'

export default {
  data() {
    return {
      staticBackdrop: 'static',
      name: ''
    }
  },
  methods: {
    addGroup() {
      addGroup({
        name: this.name
      }).then(data => {
        if (data.code === 0) {
          this.$modal.modal('hide')
          this.$promise.resolve()
        }
      })
    }
  }
}
