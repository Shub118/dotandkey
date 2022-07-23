function data(i,id,c,t,d,dis,sp,p,r){
    this.image=i
    this.productID=id
    this.category=c
    this.title=t
    this.description=d
   this.discount = dis
    this.stackedprice=sp
    this.price=p
    this.rating=r
};

let productdata1=new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_360x.png?v=1657950494","p1","moisturizer","Vitamin C Moisturizer With Kakadu Plum & Vitamin E","Makes Skin Glow | Moisturizes | Even Tones OILY  DRY SKIN TYPE",20,499,399,"4.7 ★");
let productdata2 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.jpg?v=1656934686","p2","serum","20% Vitamin C Serum with Blood Orange Combination","Pure L-ascorbic Acid | Freshly Made FOR ALL SKIN TYPES",20,499,450,"4.7 ★");
let productdata3 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_360x.jpg?v=1656934758","p3","sunscreen","Cica + Niacinamide Face Sunscreen SPF 50 PA+++","OMC Oxybenzone-free |  Easily blendable | Matte finish OILY, ACNE PRONE & SENSITIVE SKIN",20,499,399,"4.0 ★");
let productdata4 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_360x.jpg?v=1656934311","p4","facewash","Watermelon Super Glow Vitamin C Face Wash Gel","Sulphate-free | Gently exfoliates | Boosts skin glow FOR OILY, NORMAL, COMBINATION SKIN",25,650,600,"4.4 ★")
let productdata5 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicafacewash_12daa62a-9f18-4d9f-bacb-1ba15a1f4fad_360x.jpg?v=1656935431","p5","facewash","Cica & Green Tea Face Wash for men and women","Sulphate-free | Unclogs Pores  | With tea tree oil FOR OILY, ACNE PRONE AND SENSITIVE SKIN",20,499,450,"4.7 ★")
let productdata6 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2_360x.jpg?v=1657950488","p6","cream","Retinol & Ceramide Age Defense Night Cream For Face","Firms skin | Boosts collagen | Delays aging ALL SKIN TYPES",18,654,565,"4.7 ★")
let productdata7 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.jpg?v=1656934364","p7","serum","10% Niacinamide Face Serum With Zinc & Antioxidants","Spot Correcting | Balances oil  | Controls breakouts ALL SKIN TYPES",22,653,599,"4.4 ★")
let productdata8 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_360x.jpg?v=1657950474","p8","moisturizer","72 HR Hydrating Probiotic Gel Moisturizer","Balances microbiome | Strengthens skin barrier | Oil-Free",22,539,450,"4.7 ★")
let productdata9 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288","p9","serum","Vitamin C++ Glow Face Serum With Hyaluronic","Even skin tone | Natural Vitamin C | Brightens & Firms FOR ALL SKIN TYPES",20,699,599,"4.0 ★")
let productdata10 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.jpg?v=1656420733","p10","mask","Salicylic & French Green Clay Face Mask","Unclogs Pores | Fades acne scars | Fights Pollution FOR OILY, ACNE-PRONE SKIN",25,656,609,"4.7 ★")
let productdata11 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1_360x.jpg?v=1656934490","p11","mask","Vitamin C Lip Mask With Vitamin E","Fades pigmentation | Deeply nourishes | Adds a pink tint FOR ALL SKIN TYPES",22,656,568,"4.4 ★")
let productdata12 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclaymask_1f29e041-04b7-4b13-875e-0ffa582f92e2_360x.jpg?v=1656935595","p12","mask","Vitamin C Pink Clay Face Mask for men and women","Deep cleanses | Reverses dullness | Even tones skin ALL SKIN TYPES",20,489,450,"4.7 ★")

let productdataArr = [];
productdataArr.push(productdata1,productdata2,productdata3,productdata4,productdata5,productdata6,productdata7,productdata8,productdata9,productdata10,productdata11,productdata12)
let filter = document.querySelector("#filter")
let sort = document.querySelector("#sort")
function display(data){
    let cont = document.querySelector("#products")
    cont.innerHTML=null;
    data.forEach((el)=>{
     let image = document.createElement("img");
     image.src=el.image;
     image.addEventListener("click",()=>{
       localStorage.setItem("description",JSON.stringify(el))
       
       window.location.href="desc.html"
     })
     let discount = document.createElement("p")
     discount.setAttribute("class","discount")
     discount.innerText=`save ${el.discount}%`
     let rating = document.createElement("p")
     rating.innerText=el.rating;
     let title = document.createElement("p")
     title.innerText=el.title;
     
     let stackedprice = document.createElement("p")
     stackedprice.innerText=`RS: ${el.stackedprice}`;
    stackedprice.style.textDecoration="line-through"
     let price = document.createElement("p")
     price.innerText=`Rs: ${el.price}`;
     price.style.color="pink"
     
     let prdiv = document.createElement("div")
     let addtocart = document.createElement("button")
     addtocart.innerText="Add To Cart"
     addtocart.addEventListener("click",function(){
      cart(el)
     })
     prdiv.append(stackedprice,price);
     let div = document.createElement("div")
     div.append(discount,image,rating,title,prdiv,addtocart);
     cont.append(div);

    })
}
display(productdataArr);

filter.addEventListener("change",()=>{
    if(filter.value==="filter"){
        display(productdataArr)
    }else{
        let filtered = productdataArr.filter((el)=>{
          return el.category===filter.value;
        })
        display(filtered);
    }
})
sort.addEventListener("change",()=>{
if(sort.value==="featured"){
    
    display(productdataArr);
}if(sort.value==="price,low to high"){
    let sorted = productdataArr.sort((a,b)=>{
     return a.price-b.price;
    })
    display(sorted)
}if(sort.value==="price,high to low"){
    let sorted = productdataArr.sort((a,b)=>{
        return b.price-a.price;
    })
    display(sorted)
}if(sort.value==="alphabetically,a-z"){
    let sorted = productdataArr.sort((a,b)=>{
        return a.title.length-b.title.length;
    })
    display(sorted)
}if(sort.value==="alphabetically,z-a"){
    let sorted = productdataArr.sort((a,b)=>{
        return b.title.length-a.title.length;
    })
    display(sorted)
}
})

import footer from "./footer.js"
import {navbar,navbarmenu,cross} from "./navbar.js"


document.querySelector("#toppicks-footer").innerHTML=footer();
document.getElementById('navbar-bottom').innerHTML = navbar()
document.getElementById('navbarmenu').innerHTML=navbarmenu();

document.getElementById('hamburger').addEventListener('click',cross)
let dataLS =  JSON.parse(localStorage.getItem("cartdata")) || [];
function cart(el){
   
   dataLS.push(el)
  
  localStorage.setItem("cartdata",JSON.stringify(dataLS))
  window.location.href="cart.html"
   
}