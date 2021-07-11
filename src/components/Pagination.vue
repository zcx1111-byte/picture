<template>
  <nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <router-link :to="`/${$route.params.page-1>0?$route.params.page-1:$route.params.page}`" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </router-link>
    </li>
    <li v-for="n in pages" :key="n"><router-link :to="`/${n}`">{{n}}</router-link></li>
    <li>
      <router-link :to="`/${$route.params.page>$store.state.page?$store.state.page:parseInt($route.params.page)+1}`" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
    name:'Pagination',
    props:['pages']
}
</script>

<style scoped>
    nav{
      text-align: center;
    }
</style>