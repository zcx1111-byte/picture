<template>
    <div>
        <router-link to="/album/1">相册</router-link>
        <router-link to="/video/1">视频</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Photos from './components/Photos.vue'
import PicHeader from './components/PicHeader.vue'

export default {
  components: { Photos, PicHeader },
    name:'App',
    data(){
        return {
          
        }
    },
    created(){
        const picReg=/\.(jpg|png|gif)$/i;
        const vidReg=/\.mp4$/i;
        this.$http.get('http://192.168.0.104:8080/file_list').then(response=>{
            let photos=response.data.filter(v=>picReg.test(v));
            let pages=Math.ceil(photos.length/10);
            let videos=response.data.filter(v=>vidReg.test(v));
            let vidPages=Math.ceil(videos.length/10);
            this.$store.commit('init',{type:'photos',value:photos})
            this.$store.commit('init',{type:'pages',value:pages})
            this.$store.commit('init',{type:'videos',value:videos})
            this.$store.commit('init',{type:'vidPages',value:vidPages})

        })
    }
}
</script>

