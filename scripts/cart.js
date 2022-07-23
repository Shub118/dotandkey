import footer from "./footer.js";
import {navbar,navbarmenu,cross} from './navbar.js'

document.querySelector('#navbar-bottom').innerHTML = navbar()
document.querySelector('#navbarmenu').innerHTML = navbarmenu()

document.getElementById('hamburger').addEventListener('click',cross)
// /////////////////////////////////
let getDoc = (x) =>{
    return document.querySelector(x)
}

let crt = (x)=>{
    return document.createElement(x)
}

getDoc('#footer').innerHTML = footer()

// /////////////cart /////////////////
// let cartData = [{
//         img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
//         titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
//         pr:659,
//     },
//     {
//         img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
//         titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
//         pr:609,
//     },
//     {
//         img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
//         titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
//         pr:609,
//     }
// ]
let cartData = JSON.parse(localStorage.getItem("cartdata")) || []
let totalItm = cartData.length;
    let x = 0;
    let qt = 1;

    let display = (data)=>{
        getDoc('#cont').innerHTML = null;
        let stotal = getDoc('#stotal>h4+h4');
        data.forEach(({image,title,price},ind) =>{
            let div = crt('div');
            let div1 = crt('div');
            let img = crt('img');
            img.setAttribute("src",image);
            let ttle = crt('h4');
            ttle.innerText = title;
            let rem = crt('button');
            rem.innerText = 'REMOVE';
            div1.append(ttle,rem)

            let div2 = crt('div');
            let qut = crt('p');
            qut.innerText = qt
            let inc = crt('button')
            let dec = crt('button')
            inc.innerText = '+'
            dec.innerText = '-'
            div2.append(dec,qut,inc);

            let total = crt('h3')
            total.innerText = price*qt

            getDoc('#cont').append(div)
            div.append(img,div1,div2,total)

            x +=  price*qt;
            stotal.innerText = `RS:- ${x}`
// ////////////// inc dec//////////////////////
            inc.addEventListener('click',()=>{
                qut.innerText = ++qt;
                total.innerText = price*qt
                x +=  price;
                totalItm++;
            stotal.innerText = `RS:- ${x}`
            })

        dec.addEventListener('click',()=>{
            if(qut.innerText<2){
                alert("can't go below 1")
            }else{
                qut.innerText = --qt
            total.innerText = price*qt
            x -=  price;
            totalItm--;
            stotal.innerText = `RS:- ${x}`
            }
            
        })

//////////////////////////////////////////delete//////

rem.addEventListener('click',()=>{
    cartData.splice(ind,1)
    localStorage.setItem("cartdata",JSON.stringify(cartData))
    display(cartData)
})
    })
    }

    display(cartData)

///////////////////////checkout//////////////
// let t = getDoc('#stotal>h4+h4')
let checkout = () =>{
    localStorage.setItem("subtotal",JSON.stringify(x))
    localStorage.setItem("totalI",JSON.stringify(totalItm))
    window.location.href = 'checkout.html'
}
getDoc('#ckot').addEventListener('click',checkout)