import display from "../components/display.js"


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let slideInd = 0;
showSlides2();
function showSlides2() {
  let dots = document.getElementsByClassName("dot");
  let slides2 = document.getElementsByClassName("slides");
  let i;
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none"; 
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slideInd++;
if (slideInd > slides2.length) {slideInd = 1}
slides2[slideInd-1].style.display = "block";
dots[slideInd-1].className += " active";
  setTimeout(showSlides2, 4000); 
}


//Banner 2 Code...
let image=document.createElement('img');
image.src=`./images/banner2/pic1.webp`
document.getElementById("banner2").append(image);

let id=1;
setInterval(()=>{
  if(id>3){
    id=1;
  }
  document.getElementById("banner2").innerHTML="";
  let image=document.createElement('img');
  image.src=`./images/banner2/pic${id}.webp`
  document.getElementById("banner2").append(image);
  id++;
},4000)



//New Arrival Data and code below
let newArrival=[
  {
    image:"./images/newArrive/pic1.webp",
    discount:10,
    rating:"4.7/5",
    person:"(28)",
    title:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    cancelPrice:595,
    price:536.00,
  },
  {
    image:"./images/newArrive/pic2.webp",
    discount:25,
    rating:"4.7/5",
    person:"(46)",
    title:"20% Vitamin C Serum with Blood Orange | For Skin Glow |",
    cancelPrice:665,
    price:499.00,
  },
  {
    image:"./images/newArrive/pic3.webp",
    discount:20,
    rating:"5.0/5",
    person:"(21)",
    title:"Watermelon Skin Glow Face Toner With Glycolic + Lactic|",
    cancelPrice:595,
    price:316.00,
  },
  {
    image:"./images/newArrive/pic4.webp",
    discount:10,
    rating:"4.9/5",
    person:"(52)",
    title:"Cica & Green Tea Face Wash With Salicylic| Treats Acne",
    cancelPrice:395,
    price:356.00
  }
]
let newArriveContainer=document.getElementById("content");
display(newArrival,newArriveContainer)






let run=()=>{
  document.getElementsByClassName("dot2").onload=()=>{
    showSlides2();
  }
}
document.querySelector("body").onload=()=>{
  run();
};