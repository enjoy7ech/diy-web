import addTaskDialog from '@/components/modals/add-task'
import _ from 'lodash'
import { exportIpList, exportPortList, getIpList, getPortList } from '@/service/asset'
import { addTask } from '@/service/task'
import moment from 'moment'
let timer

export default {
  data() {
    return {
      showType: 'port',
      ipCheckList: [],
      allIpChecked: false,
      allPortoChecked: false,
      allServiceChecked: false
    }
  },
  mounted() {
    // _.forEach(this.portRes.portList, o => {
    //   _.map(o, x => {
    //     x.isCheck = false
    //   })
    // })

    timer = setInterval(() => {
      Promise.all([
        getIpList({
          domain: this.domain
        }),
        getPortList({
          domain: this.domain
        })
      ]).then(([r1, r2]) => {
        _.merge(this.ipRes, r1.data)
        _.merge(this.portRes, r2.data)
        this.$forceUpdate()
      })
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(timer)
  },
  methods: {
    addDigTask() {
      addTask({
        type: 'dig',
        name: `${this.domain}-域名解析`,
        group_id: this.groupId,
        priority: 1,
        domain: [this.domain]
      }).then(res => {
        if (res.code === 0) {
          this.$notify.success('任务添加成功')
        } else {
          this.$notify.error(res.msg)
        }
      })
    },
    timeFormat(t) {
      return moment.unix(t).format('YYYY-MM-DD kk:mm:ss')
    },
    portTask() {
      this.$showDialog(addTaskDialog, {
        groupId: this.groupId,
        name: `${this.domain}-端口扫描`,
        ipList: _.join(this.ipCheckList, ','),
        activeTab: 'port',
        tabs: {
          dns: false,
          port: true,
          proto: false,
          pwd: false
        }
      })
    },
    protoTask() {
      this.$showDialog(addTaskDialog, {
        portList: _.join(
          _.map(this.portRes.portList, o => {
            return _.join(
              _.map(_.filter(o, 'isCheck'), x => {
                if (x.isCheck) {
                  return `${x.ip}:${x.port}`
                }
              }),
              ','
            )
          }),
          ','
        ),
        groupId: this.groupId,
        name: `${this.domain}-服务扫描`,
        activeTab: 'proto',
        tabs: {
          dns: false,
          port: false,
          proto: true,
          pwd: false
        }
      })
    },
    addPwdTask() {
      this.$showDialog(addTaskDialog, {
        servicesList: _.join(
          _.map(this.portRes.portList, o => {
            return _.join(
              _.map(_.filter(o, 'isCheck'), x => {
                return `${x.ip}:${x.port}:${x.service}`
              }),
              ','
            )
          }),
          ','
        ),
        groupId: this.groupId,
        name: `${this.domain}-弱口令检测`,
        activeTab: 'pwd',
        tabs: {
          dns: false,
          port: false,
          proto: false,
          pwd: true
        }
      })
    },

    switchType(t) {
      this.showType = t
    },
    checkIpAll() {
      if (!this.allIpChecked) {
        this.ipCheckList = _.map(this.ipRes.ipList, 'ip') || []
      } else {
        this.ipCheckList = []
      }
      this.allIpChecked = !this.allIpChecked
    },
    checkServiceAll() {
      this.allServiceChecked = !this.allServiceChecked
      _.forEach(this.portRes.portList, o => {
        _.forEach(o, x => {
          x.isCheck = this.allServiceChecked
        })
      })
      this.$forceUpdate()
    },
    checkProtoAll() {
      this.allPortoChecked = !this.allPortoChecked
      _.forEach(this.portRes.portList, o => {
        _.forEach(o, x => {
          x.isCheck = this.allPortoChecked
        })
      })
      this.$forceUpdate()
    },
    exportIpList() {
      exportIpList({
        domain: this.domain
      }).then(res => {
        this.$saveData2File(res, `IP导出.csv`)
      })
    },
    exportServicetList() {
      exportPortList({
        domain: this.domain
      }).then(res => {
        this.$saveData2File(res, `端口服务导出.csv`)
      })
    }
  }
}
