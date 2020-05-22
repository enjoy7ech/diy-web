import { addTask, getDict } from '@/service/task'
import { getGroupList } from '@/service/group'
import addGroupDialog from '../add-project'
import _ from 'lodash'

export default {
  data() {
    //can be override
    return {
      //staticBackdrop will be boolean or 'static'
      staticBackdrop: 'static',
      tabs: {
        dns: false,
        port: false,
        proto: false,
        pwd: false,
        dig: false
      },
      activeTab: 'dns',

      wordLen: 4,
      dictFile: '',
      dnsType: [],
      domainList: '',

      ipList: '',
      portRange: '',

      portList: '',

      servicesList: '',

      digList: '',

      weakfiles: '',
      groupList: [],
      name: '',
      groupId: '',
      priority: 3,
      dict: []
    }
  },
  mounted() {
    this.getDict()
    this.getGroupList()
  },
  methods: {
    selectPort(str) {
      this.portRange = str
    },
    getDict() {
      getDict().then(data => {
        this.dict = data.data
      })
    },
    showAddGroup() {
      this.$showDialog(addGroupDialog).then(() => {
        this.getGroupList()
      })
    },
    getGroupList() {
      getGroupList().then(data => {
        this.groupList = data.data
      })
    },
    addTask() {
      switch (this.activeTab) {
        case 'dns':
          addTask({
            type: this.activeTab,
            name: this.name,
            group_id: this.groupId,
            priority: this.priority,
            domain: _.filter(_.split(this.domainList, /,|\s|\n/), o => o) || [],
            dns_type: _.join(this.dnsType, ','),
            word_len: +this.wordLen,
            dict_file: this.dictFile
          }).then(res => {
            if (res.code === 0) {
              this.$notify.success('添加成功')
              this.$modal.modal('hide')
              this.$promise.resolve()
            } else {
              this.$notify.error(res.msg)
            }
          })
          break

        case 'port':
          addTask({
            type: this.activeTab,
            name: this.name,
            group_id: this.groupId,
            priority: this.priority,
            ip_list: _.filter(_.split(this.ipList, /,|\s|\n/), o => o) || [],
            range: this.portRange,
            rate: 5000
          }).then(res => {
            if (res.code === 0) {
              this.$notify.success('添加成功')
              this.$modal.modal('hide')
              this.$promise.resolve()
            } else {
              this.$notify.error(res.msg)
            }
          })
          break

        case 'proto':
          addTask({
            type: this.activeTab,
            name: this.name,
            group_id: this.groupId,
            priority: this.priority,
            port_list: _.filter(_.split(this.portList, /,|\s|\n/), o => o) || [],
            rate: 5000
          }).then(res => {
            if (res.code === 0) {
              this.$notify.success('添加成功')
              this.$modal.modal('hide')
              this.$promise.resolve()
            } else {
              this.$notify.error(res.msg)
            }
          })
          break

        case 'pwd':
          addTask({
            type: this.activeTab,
            name: this.name,
            group_id: this.groupId,
            priority: this.priority,
            services: _.map(
              _.filter(_.split(this.servicesList, /,|\s|\n/), o => o),
              o => {
                let s = o.split(':')
                return {
                  ip: s[0],
                  port: +s[1],
                  protocol: s[2]
                }
              }
            )
          }).then(res => {
            if (res.code === 0) {
              this.$notify.success('添加成功')
              this.$modal.modal('hide')
              this.$promise.resolve()
            } else {
              this.$notify.error(res.msg)
            }
          })
          break

        case 'dig':
          addTask({
            type: this.activeTab,
            name: this.name,
            group_id: this.groupId,
            priority: this.priority,
            domain: _.filter(_.split(this.digList, /,|\s|\n/), o => o) || []
          }).then(res => {
            if (res.code === 0) {
              this.$notify.success('添加成功')
              this.$modal.modal('hide')
              this.$promise.resolve()
            } else {
              this.$notify.error(res.msg)
            }
          })
          break
      }
    },
    fetchDomain(data) {
      if (!this.domainList.endsWith(',')) {
        this.domainList += ','
      }
      this.domainList += _.uniq(_.flattenDeep(data.data))
    },
    fetchIps(data) {
      if (!this.domainList.endsWith(',')) {
        this.domainList += ','
      }
      this.ipList += _.uniq(_.flattenDeep(data.data))
    },
    fetchPorts(data) {
      if (!this.domainList.endsWith(',')) {
        this.domainList += ','
      }
      this.portList += _.uniq(_.flattenDeep(data.data))
    },
    fetchServices(data) {
      if (!this.servicesList.endsWith(',')) {
        this.servicesList += ','
      }
      this.servicesList += _.uniq(_.flattenDeep(data.data))
    },
    fetchDigList(data) {
      if (!this.digList.endsWith(',')) {
        this.digList += ','
      }
      this.digList += _.uniq(_.flattenDeep(data.data))
    },
    fetchWeakfilescanList(data) {
      if (!this.weakfiles.endsWith(',')) {
        this.weakfiles += ','
      }
      this.weakfiles += _.uniq(_.flattenDeep(data.data))
    }
  }
}
