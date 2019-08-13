<template>
  <div class="header-container-fix">
    <i @click="toggle" class="fa fa-outdent toggle-ico"></i>
    <h3 class="inline-block">{{`${pageTitle}${pageSubTitle?`/${pageSubTitle}`:''}`}}</h3>
    <el-dropdown class="pull-right inline-block" style="line-height:56px" @command="handleCommand">
      <span>
        <i class="fa fa-user-circle-o font-14"></i>
        <span>{{data.userName}}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="{func:showMyInfo}">我的主页</el-dropdown-item>
        <el-dropdown-item :command="{func:loginOut}">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script src="./component.js"></script>
<style lang="scss" src="./style.scss" scoped></style>