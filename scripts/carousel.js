let carousel = (sliders, prev, next) =>{
    let slides=Array.from(sliders.children);
    console.log(slides);
    let slideWidth=slides[0].getBoundingClientRect().width;
    
    let setSlidePosition=(slide, index) => {
        slide.style.left = slideWidth * index + "px";
    }

    slides.forEach(setSlidePosition);

    const moveToSlide = (sliders, currentslide, targetslide) => {
        sliders.style.transform = `translate(-${targetslide.style.left})`;
        currentslide.classList.remove('current-slide');
        targetslide.classList.add('current-slide');
    }

    // right button function
next.onclick = () => {
    console.log("hello");
        let currentslide = sliders.querySelector(".current-slide");
        let nextslide = currentslide.nextElementSibling;
        if (nextslide === slides[slides.length-2]) {
            nextslide = slides[0]
        }
        
        else {
            nextslide = currentslide.nextElementSibling;
        }
        moveToSlide(sliders, currentslide, nextslide)
    }
    
    // left button function
    prev.onclick = () => {
        console.log("hello");
        let currentslide = sliders.querySelector(".current-slide");
        let prevslide = currentslide.previousElementSibling;
        
        if (prevslide === null) {
            prevslide = slides[slides.length - 3]
        }
        
        else {
            prevslide = currentslide.previousElementSibling;
        }
        moveToSlide(sliders, currentslide, prevslide);
        
        
    }
}




let ingredients=()=>{
    let sliders = document.querySelector('.slider')
    let prev = document.querySelector(".button-left");
    let next = document.querySelector(".button-right");
    carousel(sliders,prev,next);
}

let skincare=()=>{
    let sliders = document.querySelector('.slider2')
    let prev = document.querySelector(".button-left2");
    let next = document.querySelector(".button-right2");
    carousel(sliders,prev,next);
}

let awards=()=>{
    let sliders = document.querySelector('.slider3')
    let prev = document.querySelector(".button-left3");
    let next = document.querySelector(".button-right3");
    carousel(sliders,prev,next);
}

let journal=()=>{
    let sliders = document.querySelector('.slider4')
    let prev = document.querySelector(".button-left4");
    let next = document.querySelector(".button-right4");
    carousel(sliders,prev,next);
}

let review=()=>{
    let sliders = document.querySelector('.slider5')
    let prev = document.querySelector(".button-left5");
    let next = document.querySelector(".button-right5");
    carousel(sliders,prev,next);
}
ingredients();
skincare();
awards();
journal();
review();