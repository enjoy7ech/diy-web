<template>
  <div style="height:100%">
    <el-menu mode="vertical" background-color="#408080" text-color="#f6f6f6" style="height:100%" :collapse="isCollapse">
      <el-menu-item :index="'title'">
        <div class="icon-fix">
          <img src="/images/logo.png" style="width:29px">
          <span>智联物业系统</span>
        </div>
      </el-menu-item>
      <template v-for="(item,index) in menus">
        <!-- 单个nav -->
        <el-menu-item @click="selectMenu(item)" :key="index" v-if="!item.children||!item.children.length" :index="index.toString()">
          <div class="icon-fix">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </div>
        </el-menu-item>
        <!-- 有子nav -->
        <el-submenu :key="index" :index="index.toString()+1" v-else>
          <template slot="title">
            <div class="icon-fix">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </div>
          </template>
          <el-menu-item @click="selectMenu(sItem)" v-for="(sItem,sIndex) in item.children" :index="`${index}-${sIndex}`" :key="sIndex">{{sItem.name}}</el-menu-item>
        </el-submenu>
      </template>
      <!-- <el-button round class="toggle-btn" @click="toggle">
        <i class="fa fa-outdent" style="color:#909399"></i>
      </el-button>-->
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  .toggle-btn {
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 20px;
    padding: 7px 22px 4px;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .icon-fix {
    color: #eaeaea;
    font-size: 15px;

    i {
      color: #fff;
    }
  }
</style>

<script src="./component.js"></script>