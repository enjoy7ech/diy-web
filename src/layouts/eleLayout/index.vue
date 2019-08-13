<template>
  <div class="app-contaniar">
    <el-container style="height:100%">
      <el-aside :width="sideWidth">
        <ele-side-bar :isCollapse="isCollapse" :menus="menus"></ele-side-bar>
      </el-aside>
      <el-container style="height:100%">
        <el-header class="header-container">
          <ele-header :data="userInfo" :isCollapse="isCollapse"></ele-header>
        </el-header>
        <el-main style="height:100%;padding:15px 15px 0 15px">
          <div class="view-container">
            <router-view></router-view>
          </div>
        </el-main>

        <!-- <el-footer>
          <ele-footer></ele-footer>
        </el-footer>-->
      </el-container>
    </el-container>
    <div class="modal-cover" @click="showMyInfo=false" v-show="showMyInfo"></div>
    <div class="side-modal" ref="sideCover" style="display:none" :class="{'slideLeft':showMyInfo,'slideLeftReturn':!showMyInfo}">
      <div style="position: relative;height: 100%;">
        <img class="footer-img" src="/images/user-1.png" alt>
        <img class="footer-text" src="/images/user-2.png" alt>
        <div class="col-xs-12 margin-t-15x">
          <div class="title">
            <i class="fa fa-user-circle"></i>
            <span class="margin-l-15x">用户信息</span>
          </div>
          <img class="toggle" @click="close" src="/images/toggle.png" alt>
        </div>
        <div class="col-xs-12 margin-t-15x">用户名:{{userInfo.userName}}</div>

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