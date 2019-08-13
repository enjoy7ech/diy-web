<template>
  <div>
    <el-carousel indicator-position="none" type="card" height='60px'>
      <el-carousel-item v-for="item in imgSrc" :key="item">
        <div class="text-center">
          <img class="ad-container" :src="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script src="./component.js"></script>