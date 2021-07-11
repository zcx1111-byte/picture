<template>
<div>
    <pic-header></pic-header>
    <Photos :photos="photos" ></Photos>
     <Pagination :pages="$store.state.pages"></Pagination>
</div>
  
</template>

<script>
import PicHeader from '../components/PicHeader.vue';
import Photos from '../components/Photos.vue';
import Pagination from '../components/Pagination.vue'
export default {
    components:{
        PicHeader,
        Photos,
        Pagination
    },
    computed:{
        photos(){
            return this.$store.state.photos.slice((this.$route.params.page-1)*10,this.$route.params.page*10)
        }
    }
}
</script>

<style>

</style>