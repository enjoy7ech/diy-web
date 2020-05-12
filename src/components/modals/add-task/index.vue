<template>
  <div class="modal fade" :data-backdrop="staticBackdrop">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-bold" id="exampleModalLabel">添加任务</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body font-14x">
          <el-tabs>
            <el-tab-pane v-if="tabs.dns" label="DNS探测">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">归属</div>
                <div class="col-8">
                  <el-select v-model="domain" size="mini" style="width:100%;">
                    <el-option value="qq.com">qq.com</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">域名</div>
                <div class="col-8">
                  <app-local-paser>
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class="margin-t-15x " type="textarea" :rows="4" placeholder="请输入内容"> </el-input>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">探测方式</div>
                <div class="col-8">
                  <div>
                    <el-checkbox label="穷举爆破"></el-checkbox>
                  </div>
                  <div>
                    <el-checkbox label="字典爆破"></el-checkbox>
                  </div>
                  <div>
                    <el-checkbox label="API收集"></el-checkbox>
                  </div>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">优先级</div>
                <div class="col-8">
                  <el-select size="mini" v-model="priority">
                    <el-option value>最低</el-option>
                    <el-option value>低</el-option>
                    <el-option value>中</el-option>
                    <el-option value>高</el-option>
                    <el-option value>最高</el-option>
                  </el-select>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane v-if="tabs.port" label="端口扫描">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">归属</div>
                <div class="col-8">
                  <el-select v-model="domain" size="mini" style="width:100%;">
                    <el-option value="qq.com">qq.com</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">IP端口</div>
                <div class="col-8">
                  <app-local-paser>
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class=" margin-t-15x" type="textarea" :rows="4" placeholder="请输入内容"> </el-input>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">端口范围</div>
                <div class="col-8">
                  <el-input></el-input>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane v-if="tabs.service" label="服务扫描">
              <div class="row">
                <div class="col-2  padding-r-0x">任务名</div>
                <div class="col-8"><el-input size="mini"></el-input></div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">归属</div>
                <div class="col-8">
                  <el-select v-model="domain" size="mini" style="width:100%;">
                    <el-option value="qq.com">qq.com</el-option>
                  </el-select>
                </div>
                <div class="col-2 padding-0x">
                  <el-button type="primary" size="mini">新增</el-button>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">IP端口</div>
                <div class="col-8">
                  <app-local-paser>
                    <el-button type="primary" size="mini">文件导入</el-button>
                  </app-local-paser>
                  <el-input class=" margin-t-15x" type="textarea" :rows="4" placeholder="请输入内容"> </el-input>
                </div>
              </div>
              <div class="row margin-t-15x">
                <div class="col-2  padding-r-0x">端口范围</div>
                <div class="col-8">
                  <el-input></el-input>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./component.js"></script>
