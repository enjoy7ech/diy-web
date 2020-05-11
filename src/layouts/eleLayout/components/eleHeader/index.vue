<template>
  <div class="header-container-fix d-flex align-items-center" style="height:100%">
    <i class="fa fa-outdent toggle-ico" @click="toggle" style="margin-top: 3px;" />
    <div class="page-title">
      {{ `${pageTitle}${pageSubTitle ? `/${pageSubTitle}` : ''}` }}
    </div>
    <el-dropdown class="inline-block ml-auto" @command="handleCommand">
      <span>
        <i class="fa fa-user-circle-o font-14" />
        <span>{{ data.userName }}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="{ func: showMyInfo }">
          我的主页
        </el-dropdown-item>
        <el-dropdown-item :command="{ func: loginOut }">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script src="./component.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
