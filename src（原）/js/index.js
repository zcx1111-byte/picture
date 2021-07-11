import '../css/index.css'
//引入bootstrap：

import 'bootstrap/dist/css/bootstrap.css';

//引入videojs
import 'video.js/dist/video-js.css'
import 'video.js/dist/video'

//获取文件列表：
//引入axios
import axios from "axios";
axios.get('http://192.168.0.104:8080/file_list').then(({data})=>{
    console.log(data);
    const files=data;
    const reg=/\.(jpg|png|gif)$/i
    files.forEach(file => {
        if(reg.test(file)){
            let img=new Image();
            img.src=`http://192.168.0.104:8080/${file}`;
            document.body.append(img)
        }else if(/\.mp4$/i.test(file)){
           let video= document.createElement('video');
           video.src=`http://192.168.0.104:8080/${file}`;
           video.width='640';
           video.height='264'
           video.controls=true;
           document.body.append(video)
            
        }
    });
})

