<template>
  <div class="scene-container">
    <div ref="scene">
      <div class="layer-container" data-depth="1.00">
        <img class="layer" src="./images/layer3.png" />
      </div>
      <div class="layer-container" data-depth="0.80">
        <h1 style="position: relative;left: 519px;top: 526px;}">欢迎来到首页</h1>
        <img class="layer" src="./images/layer2.png" />
      </div>
      <div class="layer-container" data-depth="0.60">
        <img class="layer" src="./images/layer1.png" />
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
