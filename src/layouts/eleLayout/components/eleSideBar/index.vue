<template>
  <div style="height:100%">
    <el-menu
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:100%"
      :collapse="isCollapse"
      ref="menu"
    >
      <div class="menu-title-box d-flex align-items-center">
        <span class="menu-title" v-if="!isCollapse">ClearVision</span>
        <span class="menu-title" v-else></span>
      </div>
      <template v-for="(item, index) in menus">
        <!-- 单个nav -->
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :key="index"
          :index="item.path"
          @click="selectMenu(item)"
        >
          <div class="icon-fix">
            <i :class="item.icon" />
            <span class="margin-l-10x">{{ item.name }}</span>
          </div>
        </el-menu-item>
        <!-- 有子nav -->
        <el-submenu :key="index" :index="item.path" v-else>
          <template slot="title">
            <div class="icon-fix">
              <i :class="item.icon" />
              <span class="margin-l-5x">{{ item.name }}</span>
            </div>
          </template>
          <el-menu-item
            v-for="(sItem, sIndex) in item.children"
            :key="sIndex"
            :index="item.path"
            @click="selectMenu(sItem)"
          >
            {{ sItem.name }}
          </el-menu-item>
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

.menu-title-box {
  line-height: 56px;
  padding-left: 30px;
  .menu-title {
    font-weight: bold;
    color: #fff;
    font-size: 18px;
  }
}

.icon-fix {
  // color: #eaeaea;
  font-size: 15px;

  i {
    // color: #fff;
  }
}
</style>

<script src="./component.js"></script>
