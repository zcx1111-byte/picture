<template>
  <ul class="list-group">
  <li class="list-group-item" v-for="video in $store.state.videos" :key="video">
      <router-link :to="`/video/detail/${video}`">{{video.split('.')[0]}}</router-link>
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style>

</style>