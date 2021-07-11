<template>
<video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="480"
        data-setup="{}"
>
    <source :src="`http://192.168.0.104:8080/${$route.params.id}`" type="video/mp4" />
    <!--<source src="MY_VIDEO.webm" type="video/webm" />-->
    <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
        >
    </p>
    <track kind="subtitles" src="http://192.168.0.104:8080/subs_chi.vtt" srclang="zh" label="Chinese">
</video>

</template>

<script>
export default {

}
</script>

<style>

</style>