<template>
  <div class="modal fade">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header font-bold d-flex align-items-center">
          <h5 class="modal-title" id="exampleModalLabel">
            <div style="word-break: break-word;">
              {{ domain }}
              <i class="fa fa-refresh fa-spin font-14x"></i>
            </div>
          </h5>
          <el-button class="margin-l-15x" size="mini" type="primary" @click="addDigTask">重新解析</el-button>

          <el-radio-group class="margin-l-15x padding-t-10x" v-model="showType" size="mini">
            <el-radio-button label="port">IP资产</el-radio-button>
            <el-radio-button label="proto">端口服务</el-radio-button>
          </el-radio-group>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body font-14x" v-if="showType === 'port'">
          <div class="d-flex justify-content-end">
            <el-button size="mini" type="primary" @click="portTask">端口扫描</el-button>
            <el-button size="mini" @click="checkIpAll">全选</el-button>
            <el-button size="mini" @click="exportIpList" :disabled="!(ipRes.ipList && ipRes.ipList.length)"
              >导出</el-button
            >
          </div>

          <table class="table table-bordered margin-t-15x">
            <thead>
              <tr>
                <th>
                  IP
                </th>
                <th>
                  更新时间
                </th>
              </tr>
            </thead>
            <tbody v-if="ipRes.ipList && ipRes.ipList.length">
              <tr v-for="ip in ipRes.ipList" :key="ip.ip">
                <td>
                  <el-checkbox-group v-model="ipCheckList">
                    <el-checkbox :label="ip.ip"></el-checkbox>
                  </el-checkbox-group>
                </td>
                <td>
                  {{ timeFormat(ip.update_time) }}
                </td>
              </tr>
            </tbody>
            <tr v-else>
              <td colspan="2">
                暂无数据
              </td>
            </tr>
          </table>
        </div>
        <div class="modal-body font-14x" v-else>
          <div class="d-flex justify-content-end">
            <el-button size="mini" type="primary" @click="protoTask">服务扫描</el-button>
            <el-button size="mini" type="primary" @click="addPwdTask">弱口令检测</el-button>
            <el-button size="mini" @click="checkServiceAll">全选</el-button>
            <el-button size="mini" @click="exportServicetList">导出</el-button>
          </div>

          <table class="table table-bordered margin-t-15x" v-for="item in portRes.ipList">
            <thead>
              <tr>
                <th colspan="6">IP：{{ item }}</th>
              </tr>
              <tr>
                <th width="50px"></th>
                <th>端口</th>
                <th>协议</th>
                <th>服务</th>
                <th>版本</th>
                <th>弱口令</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="portRes.portList && portRes.portList[item] && portRes.portList[item].length">
                <tr v-for="o in portRes.portList[item]">
                  <td>
                    <el-checkbox v-model="o.isCheck"></el-checkbox>
                  </td>
                  <td>
                    {{ o.port }}
                  </td>
                  <td>
                    {{ o.protocol }}
                  </td>
                  <td>
                    {{ o.service }}
                    <el-popover placement="top-start" trigger="hover" v-if="o.info">
                      <app-scrollbar>
                        <div style="max-width:80vw;max-height:60vh;">
                          <pre style="display:inline-block">
                          <code id="json">
                            {{ JSON.stringify(o.info, null, ' ') }}
                          </code>
                        </pre>
                        </div>
                      </app-scrollbar>
                      <i slot="reference" class="el-icon-warning-outline"></i>
                    </el-popover>
                  </td>
                  <td>
                    {{ o.service_version }}
                  </td>
                  <td>
                    <div v-if="portRes.pwdScanHistory[`${o.ip}:${o.port}`]">
                      已扫描
                      <el-popover placement="top-start" trigger="hover" v-if="portRes.pwdList[`${o.ip}:${o.port}`]">
                        <app-scrollbar>
                          <div style="max-width:80vw;max-height:60vh;">
                            <pre style="display:inline-block">
                          <code id="json">
                            {{ JSON.stringify(portRes.pwdList[`${o.ip}:${o.port}`], null, ' ') }}
                          </code>
                        </pre>
                          </div>
                        </app-scrollbar>
                        <span slot="reference">{{ portRes.pwdList[`${o.ip}:${o.port}`].length }}个</span>
                      </el-popover>
                    </div>
                    <div v-else>
                      未扫描
                    </div>
                  </td>
                </tr>
              </template>

              <tr v-else>
                <td colspan="6">
                  暂无数据
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./component.js"></script>
