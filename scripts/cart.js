import footer from "./footer.js";
import {navbar,navbarmenu,cross} from './navbar.js'

document.querySelector('#navbar-bottom').innerHTML = navbar()
document.querySelector('#navbarmenu').innerHTML = navbarmenu()


// /////////////////////////////////
let getDoc = (x) =>{
    return document.querySelector(x)
}

let crt = (x)=>{
    return document.createElement(x)
}

getDoc('#footer').innerHTML = footer()

// /////////////cart /////////////////
let cartData = [{
        img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
        titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
        pr:659,
    },
    {
        img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
        titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
        pr:609,
    },
    {
        img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_180x.jpg?v=1657950474',
        titl:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water',
        pr:609,
    }
]
    let x = 0;
    let qt = 1;

    let display = (data)=>{
        getDoc('#cont').innerHTML = null;
        let stotal = getDoc('#stotal>h4+h4');
        data.forEach(({img,titl,pr},ind) =>{
            let div = crt('div');
            let div1 = crt('div');
            let image = crt('img');
            image.src = img;
            let title = crt('h4');
            title.innerText = titl;
            let rem = crt('button');
            rem.innerText = 'REMOVE';
            div1.append(title,rem)

            let div2 = crt('div');
            let qut = crt('p');
            qut.innerText = qt
            let inc = crt('button')
            let dec = crt('button')
            inc.innerText = '+'
            dec.innerText = '-'
            div2.append(dec,qut,inc);

            let total = crt('h3')
            total.innerText = pr*qt

            getDoc('#cont').append(div)
            div.append(image,div1,div2,total)

            x +=  pr*qt;
            stotal.innerText = `RS:- ${x}`
// ////////////// inc dec//////////////////////
            inc.addEventListener('click',()=>{
                qut.innerText = ++qt;
                total.innerText = pr*qt
                x +=  pr;
            stotal.innerText = `RS:- ${x}`
            })

        dec.addEventListener('click',()=>{
            if(qut.innerText<2){
                alert("can't go below 1")
            }else{
                qut.innerText = --qt
            total.innerText = pr*qt
            x -=  pr;
            stotal.innerText = `RS:- ${x}`
            }
            
        })

//////////////////////////////////////////delete//////

rem.addEventListener('click',()=>{
    cartData.splice(ind,1)
    display(cartData)
})
    })
    }

    display(cartData)

///////////////////////checkout//////////////
// let t = getDoc('#stotal>h4+h4')
let checkout = () =>{
    localStorage.setItem("subtotal",JSON.stringify(x))
    window.location.href = 'checkout.html'
}
getDoc('#ckot').addEventListener('click',checkout)