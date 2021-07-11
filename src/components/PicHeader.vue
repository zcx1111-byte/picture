<template>
  <header class="header">
      <div class="header-left"><h1>相册</h1></div>
      <div class="header-right">
          <span class="glyphicon glyphicon-plus"></span>
          <span class="glyphicon glyphicon-option-vertical"></span>
      </div>
  </header>
</template>

<script>
export default {
  name:'PicHeader'
}
</script>

<style>
  
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>