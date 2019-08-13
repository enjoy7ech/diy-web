// @flow
import Parallax from 'parallax-js'

export default {
  data () {
    return {

    }
  },
  mounted () {
    var scene = document.getElementById('scene')
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    })
  },
  methods: {

  }
}
