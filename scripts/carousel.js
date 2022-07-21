let sliders=document.querySelector('.slider')
let slides=Array.from(sliders.children);

let prev=document.querySelector(".button-left");
let next=document.querySelector(".button-right");

let slideWidth=slides[0].getBoundingClientRect().width;

let setSlidePosition=(slide,index)=>{
    slide.style.left=slideWidth*index+"px";
}

slides.forEach(setSlidePosition);

const moveToSlide=(sliders,currentslide,targetslide)=>{
    sliders.style.transform=`translate(-${targetslide.style.left})`;
    currentslide.classList.remove('current-slide');
    targetslide.classList.add('current-slide');
}

// right button function
next.onclick=()=>{
    let currentslide=sliders.querySelector(".current-slide");
    let nextslide=currentslide.nextElementSibling;
    if(nextslide===slides[slides.length-2]){
        nextslide=slides[0]
    }
    
    else{
        nextslide=currentslide.nextElementSibling;
    }
    moveToSlide(sliders,currentslide,nextslide)
}

// left button function
prev.onclick=()=>{
    console.log("hello");
    let currentslide=sliders.querySelector(".current-slide");
    let prevslide=currentslide.previousElementSibling;
    
    if(prevslide===null){
        prevslide=slides[slides.length-3]
    }
    
    else{
        prevslide=currentslide.previousElementSibling;
    }
    moveToSlide(sliders,currentslide,prevslide);

    
}