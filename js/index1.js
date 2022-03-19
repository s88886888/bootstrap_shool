

    window.onload = function(){
             setInterval("toggleSound()",100);
        }

    function toggleSound() {
                var music = document.getElementById("vd");//获取ID  
                    
                if (music.paused) { //判读是否播放  
                    music.paused=false;
                    music.play(); //没有就播放 
                }    
        }


// var app=new Vue({

//     el:"#app",
//     data:{

//         src1: "https://tse4-mm.cn.bing.net/th/id/OIP-C.tS2MKx7CZtff7CPI0Kpj2QHaEo?pid=ImgDet&rs=1"
//     }

// })
