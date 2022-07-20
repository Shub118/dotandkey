// JSON.parse(localStorage.getItem("cart"))
let cartData = [
    {image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_720x.png?v=1657950494",
description:'Makes Skin Glow | Moisturizes | Even Tones OILY, DRY SKIN TYPE',
title:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
 productID:"p1",
 category:"moisturizer",
 price:"599",
stackedPrice:800}
]
// let data = JSON.parse(localStorage.getItem("description"))
let data = {image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_720x.png?v=1657950494",
description:'Makes Skin Glow | Moisturizes | Even Tones OILY, DRY SKIN TYPE',
title:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
 productID:"p1",
 category:"moisturizer",
 price:"599",
stackedPrice:800}

let getDoc = (x)=> {
    return document.querySelector(x)
}
let crt = (x)=> {
    return document.createElement(x)
}

let div = getDoc('#main>div')

let div2 = getDoc('#title')
let image = crt('img')
image.src = data.image
let title = crt('h1')
let desc = crt('p')
desc.innerText = data.description
title.innerText = data.title
let price = crt('h2')
price.innerText = `RS: ${data.price}`
let stackedPrice = crt('h2')
stackedPrice.innerText = `RS: ${data.stackedPrice}`
stackedPrice.style.textDecoration = 'line-through'

div.append(image)
div2.append(title,desc,stackedPrice,price)


// ///////////////////// inc,dec///////////////////
getDoc('#in').addEventListener('click',inc)
getDoc('#dec').addEventListener('click',dec)
let countd = getDoc("button+span")

function inc (){
        countd.innerText++;
        price.innerText = `RS: ${data.price*countd.innerText}` ;
    }

    function dec (){
      if(countd.innerText<2){
            alert("Can Not Go Below 1")
        }
        else{
          countd.innerText--;
        price.innerText = `RS: ${data.price*countd.innerText}`
        }
       ;
        
    }

    // /////////////////////////////////ADD TO CART//////////////////
    
    let cart = ()=>{
        let flag = true;
        cartData.forEach((el) => {
            if(el.productID == data.productID) flag = false;
        });

        if(flag){
            cartData.push(data)
            window.location.href = 'cart.html'
        }else{
            alert("ALREADY ADDED TO CART")
        }
        
    }

    