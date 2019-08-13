import io from 'socket.io-client'

let socket1
export default {
  data () {
    return {
      message1: '',
      message2: '',
      message3: '',
      toSendMsg1: '',
      toSendMsg2: '',
      toSendMsg3: ''
    }
  },
  mounted () {
    socket1 = io('http://localhost:8000/my-socket')
    socket1.on('connect', socket => {
    })
  },
  methods: {
    send1 () { },
    send2 () { },
    send3 () { }
  }
}
