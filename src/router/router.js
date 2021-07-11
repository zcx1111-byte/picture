import VueRouter from 'vue-router';
import Detail from '../pages/Detail.vue';
import Album from '../pages/Album.vue';
import Video from '../pages/Video.vue';
import VideoDetail from '../pages/VideoDetail.vue'
const routes=[
    {
        path:'/album/:page',
        component:Album
    },
    {
        path:'/picture/detail/:id',
        component:Detail
    },
    {
        path:'/video/:page',
        component:Video
    },
    {
        path:'/video/detail/:id',
        component:VideoDetail
    }
]

export default new VueRouter({
    routes
})