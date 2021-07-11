<template>
  <div class="row">
  <div class="col-xs-6 col-md-3" v-for="photo in photos" :key="photo">
    <router-link :to="`/picture/detail/${photo}`" class="thumbnail">
      <img :src="`http://192.168.0.104:8080/${photo}`" alt="">
    </router-link>
  </div>

  
</div>
</template>

<script>

export default {
    name:'Photos',
    props:['photos']
}
</script>

<style>

</style>