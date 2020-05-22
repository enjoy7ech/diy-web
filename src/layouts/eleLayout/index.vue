<template>
  <div class="app-contaniar">
    <el-container style="height:100%">
      <el-aside :width="sideWidth">
        <ele-side-bar :is-collapse="isCollapse" :menus="menus" />
      </el-aside>
      <el-container style="height:100%">
        <el-header class="header-container">
          <ele-header :isCollapse="isCollapse" />
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
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
