// window.onload = function() {} //ошибка коли подключено багато
//файлів (треба розібраться    (?   <script onload="..." src...))

// video
let videoBlock = document.querySelector(".video");
let video = document.querySelector("#video");
    
// variables
// let videoBlodkMargin = 140; //margin блока який буде міняться
    
let startPoint = 370; //початок 
// let endPoint = 1010;  //кінець
let endPoint = offset(videoBlock).top + 10; 

// // коофіцієнт зміни
// let correlation = (videoBlodkMargin / (endPoint - startPoint)).toFixed(2);

// videoBlock.style.margin = `0 ${videoBlodkMargin}px`;
// videoBlock.style.willChange = "margin"; //повідомляє браузер что це буде міняться

// let valueForPoint = 0;
// let run = true;


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
// function Video(windowScorll){
//     let windowScorllTop = windowScorll;
                
//     // console.log(windowScorllTop)\

//     if(videoBlock.style.margin <= "0px 0px"){
//         run = false;
//     }
//     if(windowScorllTop <= endPoint){
//         run = true;
//     }
    
    
//     if(run == true){   
//         valueForPoint = ((endPoint - windowScorllTop) * correlation).toFixed(3);
        
//         videoBlock.style.margin = `0 ${valueForPoint}px`;
//     }
// }

window.addEventListener("scroll", () => {
    let windowScrollTop = window.pageYOffset.toFixed(10); 

    if(onceStartVideo == true){
        Video(windowScrollTop);
        onceStartVideo = false;
    }
    if(windowScrollTop >= startPoint && windowScrollTop <= endPoint + 100 ){
        Video(windowScrollTop);
    }






    // Video(windowScrollTop);
    // if(windowScrollTop >= endPoint){
    //     videoBlock.style.margin = "0px";
    // }
});






// Math.ceil()                  округление вверх
// requestAnimationFrame        каже браузеру что треба зделать дальше прорисовку
// closest                      ближайший родитель


		