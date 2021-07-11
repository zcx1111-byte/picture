<template>
  <div>
      <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name:'Detail',
  data(){
    console.log(this.$router)
    return {
      src:'http://192.168.0.104:8080/'+this.$route.params.id
    }
  }
}
</script>

<style>

</style>