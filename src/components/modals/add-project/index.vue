<template>
  <div class="modal fade" :data-backdrop="staticBackdrop">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-bold" id="exampleModalLabel">
            新增项目
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body font-14x">
          <div class="row">
            <div class="col-3">项目名</div>
            <div class="col-9"><el-input v-model="name"></el-input></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="addGroup">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./component.js"></script>
