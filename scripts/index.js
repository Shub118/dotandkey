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
    title:"20% Vitamin C Serum with Blood Orange | For Skin Glow",
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

//========Best Seller Products Data

// skincare
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
    title:"Yoghurt Glow Body Moist- urizer WITH Avalon Lemon",
    discount:31,
    rating:"4.6/5",
    person:"(220)",
    cancelPrice:665,
    price:499,
  }];

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

  let skincare=document.getElementById("skin")
  let bodycare=document.getElementById("body")
  let haircare=document.getElementById("hair")
  let nutri=document.getElementById("nutr");

  //====SKIN CARE====
  let bestSeller=document.getElementById("bestSellerContent");
  display(skinCare,bestSeller);
  skincare.style="color:red";

  skincare.onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(skinCare,bestSeller);

    skincare.style="color:red";
    bodycare.style="color:gray";
    haircare.style="color:gray";
    nutri.style="color:gray";
  }

  //====BODY CARE====
  bodycare.onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(bodyCare,bestSeller);

    skincare.style="color:gray";
    bodycare.style="color:red";
    haircare.style="color:gray";
    nutri.style="color:gray";
  }
//====HAIRCARE====
  haircare.onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(hairCare,bestSeller);

    skincare.style="color:gray";
    bodycare.style="color:gray";
    haircare.style="color:red";
    nutri.style="color:gray";
  }

//====NUTRITION====
  nutri.onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(nutrition,bestSeller);

    skincare.style="color:gray";
    bodycare.style="color:gray";
    haircare.style="color:gray";
    nutri.style="color:red";
  }


//==========Top Categories all products data=============

  let faceCream=[
    {
      image:"./images/facecream/pic1.webp",
      title:"Retinol & Ceramide Age Defense Night Cream For Face",
      discount:"25",
      rating:"4.7/5",
      person:"(222)",
      cancelPrice:945,
      price:709,
    },
    {
      image:"./images/facecream/pic2.webp",
      title:"72 HR Hydrating Probiotic Gel Moisturizer For Face",
      discount:"15",
      rating:"4.7/5",
      person:"(248)",
      cancelPrice:745,
      price:633,
    },
    {
      image:"./images/facecream/pic3.webp",
      title:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
      discount:"14",
      rating:"4.8/5",
      person:"(245)",
      cancelPrice:700,
      price:599,
    },
    {
      image:"./images/facecream/pic4.webp",
      title:"CICA Niacinamide Night Gel With Green Tea-Tree oil",
      discount:"5",
      rating:"4.8/5",
      person:"(137)",
      cancelPrice:595,
      price:565,
    }]

  let faceSerum=[
    {
      image:"./images/faceserum/pic1.webp",
      title:"10% Niacinamide Face Serum With Zinc & Antioxidants",
      discount:"25",
      rating:"4.6/5",
      person:"(220)",
      cancelPrice:665,
      price:499,
    },
    {
      image:"./images/faceserum/pic2.webp",
      title:"HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
      discount:"25",
      rating:"4.7/5",
      person:"(296)",
      cancelPrice:665,
      price:499,
    },
    {
      image:"./images/faceserum/pic3.webp",
      title:"Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu",
      discount:"25",
      rating:"4.7/5",
      person:"(348)",
      cancelPrice:795,
      price:599,
    }]

  let faceWash=[
    {
      image:"./images/facewash/pic1.webp",
      title:"Watermelon Super Glow Vitamin C Face Wash Gel",
      discount:"25",
      rating:"4.9/5",
      person:"(82)",
      cancelPrice:395,
      price:296,
    },
    {
      image:"./images/facewash/pic2.webp",
      title:"Cica & Green Tea Face Wash With Salicylic| Treats Acne",
      discount:"10",
      rating:"4.9/5",
      person:"(53)",
      cancelPrice:395,
      price:356,
    },
    {
      image:"./images/facewash/pic3.webp",
      title:"DEEP PORE FACIAL FOAM CLEANSER",
      discount:"10",
      rating:"4.7/5",
      person:"(81)",
      cancelPrice:395,
      price:356,
    }]

  let faceMask=[
    {
      image:"./images/facemask/pic1.webp",
      title:"Salicylic & French Green Clay Face Mask With Match",
      discount:"28",
      rating:"4.8/5",
      person:"(235)",
      cancelPrice:695,
      price:499,
    },
    {
      image:"./images/facemask/pic2.webp",
      title:"DETAN + GLOW GREEN TEA CLAY MASK",
      discount:"28",
      rating:"4.7/5",
      person:"(143)",
      cancelPrice:695,
      price:499,
    },
    {
      image:"./images/facemask/pic3.webp",
      title:"Vitamin C Pink Clay Face Mask With Kakadu",
      discount:"28",
      rating:"4.9/5",
      person:"(297)",
      cancelPrice:695,
      price:499,
    }]

    let facecream=document.getElementById("cream");
    let faceserum=document.getElementById("serum");
    let facewash=document.getElementById("wash");
    let facemask=document.getElementById("mask");

// ------faceCream div of Top seller section
    let topcontent=document.getElementById("topCatContent")
    display(faceCream,topcontent);
    facecream.style="color:red;"
    
    facecream.onclick=()=>{
      let topcontent=document.getElementById("topCatContent")
      topcontent.innerHTML=null;
      display(faceCream,topcontent);

      facecream.style="color:red;"
      faceserum.style="color:gray;"
      facemask.style="color:gray;"
      facewash.style="color:gray;"
    }

// ------faceSerum div of Top seller section
    faceserum.onclick=()=>{
      let serumContent=document.getElementById("topCatContent");
      serumContent.innerHTML=null;
      display(faceSerum,serumContent);

      facecream.style="color:gray;"
      faceserum.style="color:red;"
      facewash.style="color:gray;"
      facemask.style="color:gray;"
    }

// -------faceWash div of Top seller section
    facewash.onclick=()=>{
      let washContent=document.getElementById("topCatContent");
      washContent.innerHTML=null;
      display(faceWash,washContent);

      facecream.style="color:gray;"
      faceserum.style="color:gray;"
      facewash.style="color:red;"
      facemask.style="color:gray;"
    }

// -------faceWash div of Top seller section
  facemask.onclick=()=>{
    let maskContent=document.getElementById("topCatContent");
    maskContent.innerHTML=null;
    display(faceMask,maskContent);

    facecream.style="color:gray;"
    faceserum.style="color:gray;"
    facewash.style="color:gray;"
    facemask.style="color:red;"
  }