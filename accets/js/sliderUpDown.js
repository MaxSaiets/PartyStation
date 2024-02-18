//Для знаходження точних координатів    top: left:
function offset(element){
    const rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


let columnContainer = document.querySelector(".sliderUpDown__container");

let rowItem = document.querySelector(".row__item");

let container = document.querySelector(".rowSecond__thirdColumn");
container.style.marginTop = `${-(rowItem.clientHeight / 2)}px`;


let columnUp = document.querySelector(".js_thirdColumn__row--Up");
let columnFirstUp = columnUp.firstElementChild;

let columnDown = document.querySelector(".js_thirdColumn__row--Down");
let columnLastDown = columnDown.lastElementChild;


let translateYUp = 0;
let translateYDown = 0;
let speedSlUpDown = 0.2;
columnUp.style.willChange = "transform";
columnDown.style.willChange = "transform";


setInterval(SliderUpDown, 10);

window.addEventListener("scroll", () =>{
    let windowScrollTop = window.pageYOffset;
});    


function SliderUpDown() {
    // if(offset(columnFirstUp).top <= offset(columnContainer).top - (rowItem.clientHeight + 50)){
    if(offset(columnFirstUp).top <= offset(columnContainer).top - rowItem.clientHeight){

        // Up
        let childHeightUp = columnFirstUp.clientHeight;

        translateYUp += childHeightUp;
        columnUp.appendChild(columnFirstUp);
        columnFirstUp = columnUp.firstElementChild;
    }
    // Up
    translateYUp -= speedSlUpDown;
    columnUp.style.transform = `translateY(${translateYUp}px)`;  


    if(offset(columnLastDown).top + columnLastDown.clientHeight >= offset(columnContainer).top + columnContainer.clientHeight + rowItem.clientHeight){
        
        // Down
        let childHeightDown = columnLastDown.clientHeight;

        translateYDown -= childHeightDown;

        let first = columnDown.firstElementChild;

        columnDown.insertBefore(columnLastDown, first)
        columnLastDown = columnDown.lastElementChild;
    }
    // down
    translateYDown += speedSlUpDown;
    columnDown.style.transform = `translateY(${translateYDown}px)`; 

};








//Через зміну padding (проблема: коли добавляеться елемент то видно проскок) 


// let marginT = -400;
// let paddingT = 400;

// let speed = 0.6;
// column.style.marginTop = `${marginT}px`;
// column.style.paddingTop = `${paddingT}px`;

// column.style.willChange = "padding";

// runItems();

// function runItems(){
//     paddingT -= speed;
    
//     column.style.paddingTop = `${paddingT}px`;
    
//     if(paddingT <= 200){
        
//         let childHeight = columnFirst.clientHeight;

//         // column.removeChild(columnFirst);
//         column.appendChild(columnFirst);

//         paddingT += childHeight;

//         columnFirst = column.firstElementChild;
//     }

//     window.requestAnimationFrame(runItems);
// }