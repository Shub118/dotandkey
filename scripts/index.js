import display from "../components/display.js"
import footer from "./footer.js";
document.getElementById("footer").innerHTML=footer();


import {navbar,navbarmenu,cross} from "./navbar.js"
document.getElementById('navbar-bottom').innerHTML = navbar()
document.getElementById('navbarmenu').innerHTML=navbarmenu();

document.getElementById('hamburger').addEventListener('click',cross)

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
let banner2=document.getElementById("banner2");

let image=document.createElement('img');
image.src=`./images/banner2/pic1.webp`
image.onclick=()=>{
  window.location.href="toppicks.html";
}
banner2.append(image);


let id=1;
setInterval(()=>{
  if(id>4){
    id=1;
  }
  banner2.innerHTML="";
  let a=document.createElement('a');
  a.href="";
  let image=document.createElement('img');
  image.src=`./images/banner2/pic${id}.webp`;
  a.append(image);
  if(id===1||id===3){
    a.href="toppicks.html"
  }
  else{
    a.href="bestseller.html";
  }
  banner2.append(a);
  id++;
},3000)



//New Arrival Data and code below
let newArrival=[
  {
    image:"./images/newArrive/pic1.webp",
    discount:10,
    rating:"4.7/5",
    person:"(28)",
    title:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    stackedprice:595,
    price:536.00,
    productID:"i1",
    description:"Targets Pigmentation | Non-Drying Formula | Blood Orange",
  },
  {
    image:"./images/newArrive/pic2.webp",
    discount:25,
    rating:"4.7/5",
    person:"(46)",
    title:"20% Vitamin C Serum with Blood Orange | For Skin Glow",
    stackedprice:665,
    price:499.00,
    productID:"i2",
    descritpion:"5% Lactic, Glycolic & Salicylic Acid | Gently Exfoliates | Pore Purifying",
  },
  {
    image:"./images/newArrive/pic3.webp",
    discount:20,
    rating:"5.0/5",
    person:"(21)",
    title:"Watermelon Skin Glow Face Toner With Glycolic + Lactic|",
    stackedprice:595,
    price:316.00,
    productID:"i3",
    description:"Pure L-ascorbic Acid | Freshly Made",
  },
  {
    image:"./images/newArrive/pic4.webp",
    discount:10,
    rating:"4.9/5",
    person:"(52)",
    title:"Cica & Green Tea Face Wash With Salicylic| Treats Acne",
    stackedprice:395,
    price:356.00,
    productID:"i4",
    description:"OMC Oxybenzone-free |  Easily blendable | Matte finish",
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
    stackedprice:700,
    price:599,
    productID:"i5",
    description:"Makes Skin Glow | Moisturizes | Even Tones",
  },
  {
    image:"./images/skicare/pic2.webp",
    title:"72 HR Hydrating Probiotic Gel Moisturizer For Face",
    discount:15,
    rating:"4.7/5",
    person:"(248)",
    stackedprice:745,
    price:633,
    productID:"i6",
    description:"Balances microbiome | Strengthens skin barrier | Oil-Free",
  },
  {
    image:"./images/skicare/pic3.webp",
    title:"Salicylic & French Green Clay Face Mask With Match Tea",
    discount:28,
    rating:"4.7/5",
    person:"(234)",
    stackedprice:695,
    price:499,
    productID:"i7",
    description:"Unclogs Pores | Fades acne scars | Fights Pollution",
  },
  {
    image:"./images/skicare/pic4.webp",
    title:"10% Niacinamide Face Serum With Zinc & Antioxidants",
    discount:25,
    rating:"4.6/5",
    person:"(220)",
    stackedprice:665,
    price:499,
    productID:"i8",
    description:"Spot Correcting | Balances oil  | Controls breakouts",
  },
  ];

let bodyCare=[
  {
    image:"./images/bodycare/pic1.webp",
    title:"DAMASK ROSE GEL BODY SCRUB",
    discount:15,
    rating:"4.7/5",
    person:"(23)",
    stackedprice:545,
    price:463,
    productID:"i9",
    description:"A soft gel scrub lovingly curated with Damask Rose, French Lavender Oil & crushed walnut shells ",
  },
  {
    image:"./images/bodycare/pic2.webp",
    title:"Vitamin C Glow Body Lotion with Lemon",
    discount:15,
    rating:"4.8/5",
    person:"(27)",
    stackedprice:595,
    price:505,
    productID:"i10",
    description:"Citrusy & lightweight body serum lotion with 3 types of vitamin C that hydrates & tones for soft",
  },
  {
    image:"./images/bodycare/pic3.webp",
    title:"Hydrating Body Lotion with Hyaluronic Acid & Rose",
    discount:20,
    rating:"4.8/5",
    person:"(34)",
    stackedprice:595,
    price:476,
    productID:"i11",
    description:"With nourishing Damask Rose oil, lavender & hyaluronic acid, this body serum lotion spreads evenly for hydrated",
  },
  {
    image:"./images/bodycare/pic4.webp",
    title:"Yoghurt Glow Body Moist- urizer WITH Avalon Lemon",
    discount:31,
    rating:"4.6/5",
    person:"(220)",
    stackedprice:665,
    price:499,
    productID:"i12",
    description:"Get happy, bouncy skin with lemony zing! A soft cushiony body yoghurt squeezed with Avalon Lemon & Verbena, it hydrates & pampers for even-toned, fresh & glowing skin.",
  }];

  let hairCare=[
    {
      image:"./images/haircare/pic1.webp",
      title:"Argan Oil Anti Hairfall Shampoo With Moringa ",
      discount:20,
      rating:"4.8/5",
      person:"(50)",
      stackedprice:695,
      price:556,
      productID:"i13",
      description:"Strengthens hair follicles | Boosts volume | Reduces cuticle damage",
    },
    {
      image:"./images/haircare/pic2.webp",
      title:"Pea Peptide Strengthening Moringa & Argan Hair Mask",
      discount:20,
      rating:"4.7/5",
      person:"(28)",
      stackedprice:645,
      price:516,
      productID:"i14",
      description:"Pea Peptide Protein, Hydrolyzed Keratin and Linoleic Acid and plant-nutrients",
    },
    {
      image:"./images/haircare/pic3.webp",
      title:"Quinoa Protein & Olive Damage Repair",
      discount:20,
      rating:"4.7/5",
      person:"(32)",
      stackedprice:695,
      price:556,
      productID:"i15",
      description:"Hyaluronic Acid & Ceramides & plant nutrients like Quinoa Protein & Olive",
    },
    {
      image:"./images/haircare/pic4.webp",
      title:"Hyaluronic Hydrating Quinoa Protein & Olive Hair ",
      discount:20,
      rating:"4.7/5",
      person:"(22)",
      stackedprice:645,
      price:516,
      productID:"i16",
      description:"Ceramides, Vegetal Keratin and plant-nutrients like Quinoa Protein and Olive",
    },
  ];

  let nutrition=[
    {
      image:"./images/nutrition/pic1.webp",
      title:"IKWI SNOOZE PRO MELTABLES",
      discount:"",
      rating:"4.7/5",
      person:"(18)",
      stackedprice:"",
      price:525,
      productID:"i17",
      description:"Nutritional mint strips with valerian and melatonin ",
    },
    {
      image:"./images/nutrition/pic2.webp",
      title:"IKWI STRESS LESS GUMMIES",
      discount:"",
      rating:"4.8/5",
      person:"(17)",
      stackedprice:"",
      price:595,
      productID:"i18",
      description:"Gummies with Ashwagandha & L-Theanine",
    },
    {
      image:"./images/nutrition/pic3.webp",
      title:"IKWI HAPPY HAIR MELTABLES",
      discount:"",
      rating:"4.7/5",
      person:"(24)",
      stackedprice:"",
      price:525,
      productID:"i19",
      description:"Nutritional Mint strips with biotin — for healthy, strong & beautiful hair.",
    },
    {
      image:"./images/nutrition/pic4.webp",
      title:"IKWI HAPPY HAIR GUMMIES",
      discount:"",
      rating:"5.0/5",
      person:"(17)",
      stackedprice:"",
      price:645,
      productID:"i20",
      description:"Gummies with Natural Biotin & Vitamin A, C & E",
    },
  ];

  let skincare=document.getElementById("skin")
  let bodycare=document.getElementById("body")
  let haircare=document.getElementById("hair")
  let nutri=document.getElementById("nutr");

  //====SKIN CARE====
  let bestSeller=document.getElementById("bestSellerContent");
  display(skinCare,bestSeller);
  skincare.style="color:#ff6781!important";

  skincare.onclick=()=>{
    let bestSeller=document.getElementById("bestSellerContent");
    bestSeller.innerHTML="";
    display(skinCare,bestSeller);

    skincare.style="color:#ff6781!important";
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
    bodycare.style="color:#ff6781!important";
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
    haircare.style="color:#ff6781!important";
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
    nutri.style="color:#ff6781!important";
  }


//==========Top Categories all products data=============

  let faceCream=[
    {
      image:"./images/facecream/pic1.webp",
      title:"Retinol & Ceramide Age Defense Night Cream For Face",
      discount:"25",
      rating:"4.7/5",
      person:"(222)",
      stackedprice:945,
      price:709,
      productID:"i21",
      description:"Firms skin | Boosts collagen | Delays aging",
    },
    {
      image:"./images/facecream/pic2.webp",
      title:"72 HR Hydrating Probiotic Gel Moisturizer For Face",
      discount:"15",
      rating:"4.7/5",
      person:"(248)",
      stackedprice:745,
      price:633,
      productID:"i22",
      description:"Balances microbiome | Strengthens skin barrier | Oil-Free",
    },
    {
      image:"./images/facecream/pic3.webp",
      title:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
      discount:"14",
      rating:"4.8/5",
      person:"(245)",
      stackedprice:700,
      price:599,
      productID:"i23",
      description:"Makes Skin Glow | Moisturizes | Even Tones",
    },
    {
      image:"./images/facecream/pic4.webp",
      title:"CICA Niacinamide Night Gel With Green Tea-Tree oil",
      discount:"5",
      rating:"4.8/5",
      person:"(137)",
      stackedprice:595,
      price:565,
      productID:"i24",
      description:"Calms skin | Fades acne scars | Reduces inflammation",
    }]

  let faceSerum=[
    {
      image:"./images/faceserum/pic1.webp",
      title:"10% Niacinamide Face Serum With Zinc & Antioxidants",
      discount:"25",
      rating:"4.6/5",
      person:"(220)",
      stackedprice:665,
      price:499,
      productID:"i25",
      description:"Spot Correcting | Balances oil  | Controls breakouts",
    },
    {
      image:"./images/faceserum/pic2.webp",
      title:"HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
      discount:"25",
      rating:"4.7/5",
      person:"(296)",
      stackedprice:665,
      price:499,
      productID:"i26",
      description:"Vitamin C and antioxidants from acai berries",
    },
    {
      image:"./images/faceserum/pic3.webp",
      title:"Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu",
      discount:"25",
      rating:"4.7/5",
      person:"(348)",
      stackedprice:795,
      price:599,
      productID:"i27",
      description:"Even skin tone | Natural Vitamin C | Brightens & Firms",
    }]

  let faceWash=[
    {
      image:"./images/facewash/pic1.webp",
      title:"Watermelon Super Glow Vitamin C Face Wash Gel",
      discount:"25",
      rating:"4.9/5",
      person:"(82)",
      stackedprice:395,
      price:296,
      productID:"i28",
      description:"Targets Pigmentation | Non-Drying Formula | Blood Orange Infused",
    },
    {
      image:"./images/facewash/pic2.webp",
      title:"Cica & Green Tea Face Wash With Salicylic| Treats Acne",
      discount:"10",
      rating:"4.9/5",
      person:"(53)",
      stackedprice:395,
      price:356,
      productID:"i29",
      description:"5% Lactic, Glycolic & Salicylic Acid | Gently Exfoliates | Pore",
    },
    {
      image:"./images/facewash/pic3.webp",
      title:"DEEP PORE FACIAL FOAM CLEANSER",
      discount:"10",
      rating:"4.7/5",
      person:"(81)",
      stackedprice:395,
      price:356,
      productID:"i30",
      description:"Sulphate-free | Gently exfoliates | Boosts skin glow",
    }]

  let faceMask=[
    {
      image:"./images/facemask/pic1.webp",
      title:"Salicylic & French Green Clay Face Mask With Match",
      discount:"28",
      rating:"4.8/5",
      person:"(235)",
      stackedprice:695,
      price:499,
      productID:"i31",
      description:"Unclogs Pores | Fades acne scars | Fights Pollution",
    },
    {
      image:"./images/facemask/pic2.webp",
      title:"DETAN + GLOW GREEN TEA CLAY MASK",
      discount:"28",
      rating:"4.7/5",
      person:"(143)",
      stackedprice:695,
      price:499,
      productID:"i32",
      description:"Deep cleanses | Reverses dullness | Even tones skin",
    },
    {
      image:"./images/facemask/pic3.webp",
      title:"Vitamin C Pink Clay Face Mask With Kakadu",
      discount:"28",
      rating:"4.9/5",
      person:"(297)",
      stackedprice:695,
      price:499,
      productID:"i33",
      description:"Sandalwood and lemon verbena",
    }]

    let facecream=document.getElementById("cream");
    let faceserum=document.getElementById("serum");
    let facewash=document.getElementById("wash");
    let facemask=document.getElementById("mask");

// ------faceCream div of Top seller section
    let topcontent=document.getElementById("topCatContent")
    display(faceCream,topcontent);
    facecream.style="color:#ff6781!important;"
    
    facecream.onclick=()=>{
      let topcontent=document.getElementById("topCatContent")
      topcontent.innerHTML=null;
      display(faceCream,topcontent);

      facecream.style="color:#ff6781!important;"
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
      faceserum.style="color:#ff6781!important;"
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
      facewash.style="color:#ff6781!important;"
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
    facemask.style="color:#ff6781!important;"
  }