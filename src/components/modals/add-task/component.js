export default {
  data() {
    //can be override
    return {
      //staticBackdrop will be boolean or 'static'
      staticBackdrop: 'static',
      tabs: {
        dns: true,
        port: true,
        service: true
      },
      domain: '',
      priority: ''
    }
  }
}
