<template>
  <div class="app-scrollbar">
    <el-scrollbar>
      <slot />
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.app-scrollbar {
  height: 100%;

  & /deep/ {
    .el-scrollbar {
      height: 100%;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
}
</style>
<script>
export default {}
</script>
