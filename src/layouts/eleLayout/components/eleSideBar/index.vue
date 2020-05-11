<template>
  <div style="height:100%">
    <el-menu
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:100%"
      :collapse="isCollapse"
    >
      <el-menu-item :index="'title'">
        <div class="icon-fix">
          <span>ClearVision</span>
        </div>
      </el-menu-item>
      <template v-for="(item, index) in menus">
        <!-- 单个nav -->
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :key="index"
          :index="index.toString()"
          @click="selectMenu(item)"
        >
          <div class="icon-fix d-flex align-items-center">
            <i :class="[item.icon, 'col-1']" />
            <span class="col-9">{{ item.name }}</span>
          </div>
        </el-menu-item>
        <!-- 有子nav -->
        <el-submenu :key="index" :index="index.toString() + 1" v-else>
          <template slot="title">
            <div class="icon-fix">
              <i :class="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </template>
          <el-menu-item
            v-for="(sItem, sIndex) in item.children"
            :key="sIndex"
            :index="`${index}-${sIndex}`"
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

.icon-fix {
  // color: #eaeaea;
  font-size: 15px;

  i {
    // color: #fff;
  }
}
</style>

<script src="./component.js"></script>
