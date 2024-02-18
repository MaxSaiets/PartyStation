// circls
let circls = document.querySelectorAll(".circl__inner")

// SpaceMans
let spaceManFirst = document.querySelector(".spaceMan--first");
let spaceManSecond = document.querySelector(".spaceMan--second");

// TV and LapTop
let TV = document.querySelector("#TV");
let LapTop = document.querySelector("#Laptop");


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.cont'
})


window.addEventListener("scroll", event =>{
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);

    // let windowScrollTop = window.pageYOffset.toFixed(0); 
    let windowScrollTop = window.pageYOffset;

    // TV and Laptop
    if(windowScrollTop >= offset(TV).top - 400){
        TV.style.right = "0";
        TV.style.opacity = "1";
    }
    if(windowScrollTop >= offset(LapTop).top - 400){
        LapTop.style.left = "-60px";
        LapTop.style.opacity = "1";
    }


    // SpaceMans
    // SpaceMan1
    if(windowScrollTop >= offset(spaceManFirst).top - 400){
        if(spaceManFirst.classList.contains('animaSp1Left')){
            spaceManFirst.classList.remove('animaSp1Left');
        }

        if(!spaceManFirst.classList.contains('animaSp1Right')){
            spaceManFirst.classList.add('animSp1Right');
        }
    }else{
        if(spaceManFirst.classList.contains('animaSp1Right')){
            spaceManFirst.classList.remove('animSp1Right');
        }

        if(!spaceManFirst.classList.contains('animaSp1Left')){
            spaceManFirst.classList.add('animaSp1Left');
        }
    }

    // SpaceMan2
    if(windowScrollTop >= offset(spaceManSecond).top - 400){
        if(spaceManSecond.classList.contains('animaSp2Left')){
            spaceManSecond.classList.remove('animaSp2Left');
        }
        
        if(!spaceManSecond.classList.contains('animaSp2Right')){
            spaceManSecond.classList.add('animSp2Right');
        }
    }else{
        if(spaceManSecond.classList.contains('animaSp2Right')){
            spaceManSecond.classList.remove('animSp2Right');
        }
        
        if(!spaceManSecond.classList.contains('animaSp2Left')){
            spaceManSecond.classList.add('animaSp2Left');
        }
    }


    // Circls
    for (let index = 0; index < circls.length; index++) {
        const element = circls[index];

        if(windowScrollTop >= offset(element).top - 200){
            element.style.opacity = "1";
        }
    }

})
// Reviews__item
let reviewsItems = document.querySelectorAll(".reviews__item");

let indexRevItActive = 0;
let timeReviews = 5000;
// buttons
let ButtonReviewPrev = document.querySelector(".js__reviews-previus");
let ButtonReviewNext = document.querySelector(".js__reviews-next");

ButtonReviewPrev.addEventListener("click", function(){
    reviewsItem(false)

    clearInterval(reviewInterval);
    reviewInterval = setInterval(reviewsItem, timeReviews);
});
ButtonReviewNext.addEventListener("click", function(){
    reviewsItem(true)

    clearInterval(reviewInterval);
    reviewInterval = setInterval(reviewsItem, timeReviews);
});


reviewsItem();
let reviewInterval = setInterval(reviewsItem, timeReviews);

function reviewsItem(plusOrMinus = true){
    plusOrMinus = plusOrMinus;

    if(indexRevItActive > 0){
        reviewsItems[indexRevItActive-1].style.opacity = 0;
    }
    if(indexRevItActive == 0 && reviewsItems[reviewsItems.length-1].style.opacity == 1){
        reviewsItems[reviewsItems.length-1].style.opacity = 0;
    }
    
    
    if(plusOrMinus == true){
        reviewsItems[indexRevItActive].style.opacity = 1;
        indexRevItActive == reviewsItems.length-1 ? indexRevItActive = 0 : indexRevItActive++;    
    }
    
    if(plusOrMinus == false){
        indexRevItActive == 0 ? indexRevItActive = reviewsItems.length-1 : indexRevItActive--;
        reviewsItems[indexRevItActive].style.opacity = 1;
        
        indexRevItActive == reviewsItems.length-1 ? reviewsItems[0].style.opacity = 0 : reviewsItems[indexRevItActive + 1].style.opacity = 0;
        
        if(indexRevItActive == reviewsItems.length-1 && reviewsItems[0].style.opacity == 1){
            reviewsItems[0].style.opacity = 0;
        }
    }
};


// column slider
let columnSlContainer = document.querySelector(".column__inner");
let columnSlItem = document.querySelectorAll(".content__item");

let columnSlFirst = columnSlContainer.firstElementChild;

let columnSlX = 0;
let columnSlSpeed = 1;


let SignPrevius = document.querySelector(".js__columnSL-previus");
let SignNext = document.querySelector(".js__columnSL-next");

SignPrevius.addEventListener("click", function(){

    columnSlSpeed -= 10;
    setTimeout(()=>{
        columnSlSpeed = 1;
    },600);

    let columnSlFirstWidth = columnSlFirst.clientWidth;
    columnSlX -= columnSlFirstWidth + 24;
    columnSlContainer.style.transform = `translateX(${columnSlX}px)`; 

    let columnSlLast = columnSlContainer.lastElementChild;
    columnSlContainer.insertBefore(columnSlLast, columnSlContainer.firstElementChild)
});

SignNext.addEventListener("click", function(){
    columnSlSpeed += 10;
    setTimeout(()=>{
        columnSlSpeed = 1;
    },600)
});


columnSlider();
function columnSlider(){
    
    M();
    function M(){
        columnSlX -= columnSlSpeed;

        columnSlContainer.style.transform = `translateX(${columnSlX}px)`; 

        requestAnimationFrame(M);

        if(offset(columnSlFirst).left <= -(columnSlFirst.clientWidth + 100)){

            let columnSlFirstWidth = columnSlFirst.clientWidth;
            columnSlX += columnSlFirstWidth + 24;
            columnSlContainer.style.transform = `translateX(${columnSlX}px)`; 


            columnSlContainer.append(columnSlFirst);
            columnSlFirst = columnSlContainer.firstElementChild;          
        }
    }
}



// buttons
let nextRegion = document.querySelector(".js__next-region");
let prevRegion = document.querySelector(".js__previus-region");


let bigSlContainer = document.querySelector(".bigslider__container");
let firstBigContainer = bigSlContainer.firstElementChild;

let bigSlItems = document.querySelectorAll(".bigslider__item");
let blockForActive = document.querySelectorAll(".js__blockForActive");

let indexOfChange = 0;

let speed = 4;
let translateX = 0;
let durationItems = 2000;

let requestId;
T();
function T(){
    translateX -= speed;
    bigSlContainer.style.transform = `translateX(${translateX}px)`;
    
    requestId = requestAnimationFrame(T);
    // Stop and Go next
    if(offset(bigSlItems[indexOfChange]).left <= -(bigSlItems[indexOfChange].clientWidth - 100)){
        
        cancelAnimationFrame(requestId);
        
        indexOfChange == bigSlItems.length - 1 ? indexOfChange = 0 : indexOfChange++;
        setTimeout(() => {
            F();
            requestId = requestAnimationFrame(T);
        }, durationItems);
    }
    
    // plusChild
    if(offset(firstBigContainer).left <= -(bigSlItems[indexOfChange].clientWidth + 300)){

        bigSlContainer.appendChild(firstBigContainer);
        translateX += firstBigContainer.clientWidth + 24;

        firstBigContainer = bigSlContainer.firstElementChild;
    }
        
}
F();
function F(){
    blockForActive[indexOfChange].classList.add("js__blockForActive--active");

    if(blockForActive[indexOfChange].hasAttribute("style")){
        blockForActive[indexOfChange].removeAttribute("style");
        blockForActive[indexOfChange].style.animation = `whatSlActive ${Math.ceil((bigSlItems[indexOfChange].clientWidth - 100) / speed / 60) + (durationItems / 1000)}s linear normal`;
    }
    blockForActive[indexOfChange].style.animation = `whatSlActive ${Math.ceil((bigSlItems[indexOfChange].clientWidth - 100) / speed / 60) + (durationItems / 1000)}s linear normal`;

    blockForActive[indexOfChange - 1]?.classList.remove("js__blockForActive--active");           
}


function offset(element){
    const rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}