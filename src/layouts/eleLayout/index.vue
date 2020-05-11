<template>
  <div class="app-contaniar">
    <el-container style="height:100%">
      <el-aside :width="sideWidth">
        <ele-side-bar :is-collapse="isCollapse" :menus="menus" />
      </el-aside>
      <el-container style="height:100%">
        <el-header class="header-container">
          <ele-header :data="userInfo" :isCollapse="isCollapse" />
        </el-header>
        <el-main class="padding-0x">
          <app-scrollbar>
            <div class="padding-15x">
              <router-view />
            </div>
          </app-scrollbar>
        </el-main>
        <!-- <el-footer>
          <ele-footer></ele-footer>
        </el-footer>-->
      </el-container>
    </el-container>
    <div class="modal-cover" @click="showMyInfo = false" v-show="showMyInfo" />
    <div
      ref="sideCover"
      class="side-modal"
      style="display:none"
      :class="{ slideLeft: showMyInfo, slideLeftReturn: !showMyInfo }"
    >
      <div style="position: relative;height: 100%;">
        <div class="col-xs-12 margin-t-15x">
          <div class="title">
            <i class="fa fa-user-circle" />
            <span class="margin-l-15x">用户信息</span>
          </div>
        </div>
        <div class="col-xs-12 margin-t-15x">用户名:{{ userInfo.userName }}</div>

        <!-- <div class="col-xs-12 margin-t-15x">
          <div class="title">
            <i class="fa fa-lock" style="width:16px"></i>
            <span class="margin-l-15x">修改密码</span>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
