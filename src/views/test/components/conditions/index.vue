<template>
  <div class="conditions-wrapper">
      <div class="conditions-wrapper__item">
          <span>昵称1</span>
          <el-input></el-input>
      </div>
      <div class="conditions-wrapper__item">
          <span>昵称2</span>
          <el-input></el-input>
      </div>
      <div class="conditions-wrapper__item">
          <span>昵称3</span>
          <el-input></el-input>
      </div>
  </div>
</template>


<style lang="scss" scoped>
.conditions-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px;
    
    &__item{
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            display: inline-block;
            width: 100px;
            text-align: center;
        }
    }
}
</style>