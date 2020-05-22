<template>
  <div class="modal fade" :data-backdrop="staticBackdrop">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-bold" id="exampleModalLabel">添加任务</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body font-14x">
          <el-tabs v-model="activeTab" type="card">
            <el-tab-pane :disabled="!tabs.dns" label="DNS探测" name="dns">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">域名</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchDomain">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input
                    class="margin-t-15x "
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="domainList"
                  >
                  </el-input>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">探测方式</div>
                <div class="col-8">
                  <div>
                    <div class="row">
                      <div class="col-4">
                        <el-checkbox v-model="dnsType" label="dns_auto">穷举爆破</el-checkbox>
                      </div>
                      <div class="col-8"><el-input size="mini" class="short-input" v-model="wordLen"></el-input>位</div>
                    </div>
                  </div>
                  <div class="margin-t-15x">
                    <div class="row">
                      <div class="col-4">
                        <el-checkbox v-model="dnsType" label="dns_dict">字典爆破</el-checkbox>
                      </div>
                      <div class="col-8">
                        <el-radio-group v-model="dictFile">
                          <el-radio :label="item.name" v-for="item in dict" :key="item.name"
                            >{{ item.title }}-{{ item.num }}</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                  <div class="margin-t-15x">
                    <el-checkbox v-model="dnsType" label="dns_api">API收集</el-checkbox>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane :disabled="!tabs.dig" label="域名解析" name="dig">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">域名</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchDigList">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class="margin-t-15x" v-model="digList" type="textarea" :rows="4" placeholder="请输入内容">
                  </el-input>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane :disabled="!tabs.port" label="端口扫描" name="port">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>

              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">IP</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchIps">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class=" margin-t-15x" v-model="ipList" type="textarea" :rows="4" placeholder="请输入内容">
                  </el-input>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">端口范围</div>
                <div class="col-8">
                  <el-input size="mini" v-model="portRange" placeholder="请输入端口范围，如0-65535"></el-input>
                </div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-8 margin-t-15x">
                  <el-button size="mini" @click="selectPort('0-65535')">全端口</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane :disabled="!tabs.proto" label="服务扫描" name="proto">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">IP端口</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchPorts">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class="margin-t-15x" v-model="portList" type="textarea" :rows="4" placeholder="请输入内容">
                  </el-input>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane :disabled="!tabs.pwd" label="弱口令检测" name="pwd">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">IP端口:服务</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchServices">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input
                    class="margin-t-15x"
                    v-model="servicesList"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                  >
                  </el-input>
                </div>
              </div>
            </el-tab-pane>

            <!--<el-tab-pane :disabled="!tabs.weakfilescan" label="DNS解析" name="weakfilescan">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input v-model="name" size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">项目</div>
                <div class="col-8">
                  <el-select v-model="groupId" size="mini" style="width:100%;">
                    <el-option v-for="item in groupList" :key="item._id" :value="item._id" :label="item.name">{{
                      item.name
                    }}</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini" @click="showAddGroup">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option :value="5" label="最低">最低</el-option>
                    <el-option :value="4" label="低">低</el-option>
                    <el-option :value="3" label="中">中</el-option>
                    <el-option :value="2" label="高">高</el-option>
                    <el-option :value="1" label="最高">最高</el-option>
                  </el-select>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">url</div>
                <div class="col-8">
                  <app-local-paser @fetchData="fetchWeakfilescanList">
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class="margin-t-15x" v-model="weakfiles" type="textarea" :rows="4" placeholder="请输入内容">
                  </el-input>
                </div>
              </div>
            </el-tab-pane>-->
          </el-tabs>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="addTask">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./component.js"></script>
<style lang="scss" scoped>
.short-input {
  width: 50px;
  /deep/ input {
    padding: 0 5px;
  }
}
</style>
