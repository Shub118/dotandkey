import display from "../components/display.js"
import footer from "./footer.js";
document.getElementById("footer").innerHTML=footer();

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
  let a=document.createElement('a');
  // if(id==1){

  // }
  a.href="";
  let image=document.createElement('img');
  image.src=`./images/banner2/pic${id}.webp`;
  a.append(image);
  document.getElementById("banner2").append(a);
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
let newArriveContainer=document.getElementById("newArriveContent");
display(newArrival,newArriveContainer)






let run=()=>{
  document.getElementsByClassName("dot2").onload=()=>{
    showSlides2();
  }
}
document.querySelector("body").onload=()=>{
  run();
};


// bodycare data
let skinCare=[
  {
    image:"./images/skicare/pic1.webp",
    title:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    discount:14,
    rating:"4.8/5",
    person:"(245)",
    cancelPrice:700,
    price:599,
  },
  {
    image:"./images/skicare/pic2.webp",
    title:"72 HR Hydrating Probiotic Gel Moisturizer For Face",
    discount:15,
    rating:"4.7/5",
    person:"(248)",
    cancelPrice:745,
    price:633,
  },
  {
    image:"./images/skicare/pic3.webp",
    title:"Salicylic & French Green Clay Face Mask With Match Tea",
    discount:28,
    rating:"4.7/5",
    person:"(234)",
    cancelPrice:695,
    price:499,
  },
  {
    image:"./images/skicare/pic4.webp",
    title:"10% Niacinamide Face Serum With Zinc & Antioxidants",
    discount:25,
    rating:"4.6/5",
    person:"(220)",
    cancelPrice:665,
    price:499,
  },
  ];

let bestSeller=document.getElementById("bestSellerContent");
display(skinCare,bestSeller);
document.getElementById("skin").onclick=()=>{
  let bestSeller=document.getElementById("bestSellerContent");
  bestSeller.innerHTML="";
  display(skinCare,bestSeller);
}

let bodyCare=[
  {
    image:"./images/bodycare/pic1.webp",
    title:"DAMASK ROSE GEL BODY SCRUB",
    discount:15,
    rating:"4.7/5",
    person:"(23)",
    cancelPrice:545,
    price:463,
  },
  {
    image:"./images/bodycare/pic2.webp",
    title:"Vitamin C Glow Body Lotion with Lemon",
    discount:15,
    rating:"4.8/5",
    person:"(27)",
    cancelPrice:595,
    price:505,
  },
  {
    image:"./images/bodycare/pic3.webp",
    title:"Hydrating Body Lotion with Hyaluronic Acid & Rose",
    discount:20,
    rating:"4.8/5",
    person:"(34)",
    cancelPrice:595,
    price:476,
  },
  {
    image:"./images/bodycare/pic4.webp",
    title:"Yoghurt GLOW Body Moisturizer WITH Avalon Lemon VITAMIN C",
    discount:31,
    rating:"4.6/5",
    person:"(220)",
    cancelPrice:665,
    price:499,
  },
];

  document.getElementById("body").onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(bodyCare,bestSeller);
  }


  let hairCare=[
    {
      image:"./images/haircare/pic1.webp",
      title:"Argan Oil Anti Hairfall Shampoo With Moringa ",
      discount:20,
      rating:"4.8/5",
      person:"(50)",
      cancelPrice:695,
      price:556,
    },
    {
      image:"./images/haircare/pic2.webp",
      title:"Pea Peptide Strengthening Moringa & Argan Hair Mask",
      discount:20,
      rating:"4.7/5",
      person:"(28)",
      cancelPrice:645,
      price:516,
    },
    {
      image:"./images/haircare/pic3.webp",
      title:"Quinoa Protein & Olive Damage Repair",
      discount:20,
      rating:"4.7/5",
      person:"(32)",
      cancelPrice:695,
      price:556,
    },
    {
      image:"./images/haircare/pic4.webp",
      title:"Hyaluronic Hydrating Quinoa Protein & Olive Hair ",
      discount:20,
      rating:"4.7/5",
      person:"(22)",
      cancelPrice:645,
      price:516,
    },
  ];
  document.getElementById("hair").onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(hairCare,bestSeller);
  }


  let nutrition=[
    {
      image:"./images/nutrition/pic1.webp",
      title:"IKWI SNOOZE PRO MELTABLES",
      discount:"",
      rating:"4.7/5",
      person:"(18)",
      cancelPrice:"",
      price:525,
    },
    {
      image:"./images/nutrition/pic2.webp",
      title:"IKWI STRESS LESS GUMMIES",
      discount:"",
      rating:"4.8/5",
      person:"(17)",
      cancelPrice:"",
      price:595,
    },
    {
      image:"./images/nutrition/pic3.webp",
      title:"IKWI HAPPY HAIR MELTABLES",
      discount:"",
      rating:"4.7/5",
      person:"(24)",
      cancelPrice:"",
      price:525,
    },
    {
      image:"./images/nutrition/pic4.webp",
      title:"IKWI HAPPY HAIR GUMMIES",
      discount:"",
      rating:"5.0/5",
      person:"(17)",
      cancelPrice:"",
      price:645,
    },
  ];
  document.getElementById("nutr").onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(nutrition,bestSeller);
  }

