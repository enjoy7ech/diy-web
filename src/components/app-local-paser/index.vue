<template>
  <div class="paser-container" @click="showUpload">
    <slot></slot>
    <input class="paser-input" ref="uploader" hidden type="file" accept=".csv" @change="upload" />
  </div>
</template>
<script src="./component.js"></script>
<style lang="scss" socped>
.paser-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
</style>
