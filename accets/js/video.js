// video
let videoBlock = document.querySelector(".video");
let video = document.querySelector("#video");
    
let startPoint = 370; 
let endPoint = offset(videoBlock).top + 10; 
let scale = 0.8;
video.style.scale = scale;

let i = (1 - scale) / (endPoint - startPoint);

let onceStartVideo = true;
function Video(windowScorll){
    let windowScorllTop = windowScorll;
    V();
    function V(){
        requestAnimationFrame(()=>{
            windowScorllTop >= endPoint ? scale = 1 : scale = (1 - ((endPoint - windowScorllTop) * i));

            video.style.scale = scale;
        })
    }
}
 
window.addEventListener("scroll", () => {
    let windowScrollTop = window.pageYOffset.toFixed(10); 

    if(onceStartVideo == true){
        Video(windowScrollTop);
        onceStartVideo = false;
    }
    if(windowScrollTop >= startPoint && windowScrollTop <= endPoint + 100 ){
        Video(windowScrollTop);
    }
});