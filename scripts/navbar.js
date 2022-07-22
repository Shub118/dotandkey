//import

let navbar=()=>{
return ` <h3 id='hamburger'>&#9776;</h3>
 <h2>&#215;</h2>
<div class="navbar-bottom-div">
    <img id="navbar-logo" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" alt="">
</div>
<div class="navbar-bottom-div3">
    <div class="small-div" >
       
            <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="">
       
    </div>
    <div  class="small-div" >
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" alt="">
    </div>
    <div  class="small-div" >
        <img src="https://cdn-icons-png.flaticon.com/128/4601/4601551.png" alt="">
    </div>
    <div  class="small-div" >
       <img src="https://cdn-icons-png.flaticon.com/128/709/709579.png" alt="">
    </div>
    
   
</div>`


}

let navbarmenu=()=>{
    return `<div class="navbarmenu-div">
    <div id="navbarmenu-text-div">
        
            <li>WHAT'S NEW?</li>
            <li>TOP PICKS</li>
            <li>BEST SELLERS</li>
            <li>SPECIAL STORE</li>
            <li>SHOP BY INGREDIENTS</li>
            <li>SHOP BY CONCERN</li>
            <li>SHOP ALL PRODUCTS</li>
            <li>HAIR CARE</li>
            <li>BODY CARE</li>
            <li>IKWI NUTRITION</li>
            <li>DOWNLOAD THE APP</li>
            <li>KNOW US BETTER</li>
            <li>PROFILE</li>
            <li>LOGIN</li>
        
    </div>
</div>
<div class="navbarmenu-div">
<div id="navbarmenu-div-img">
    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Creative_02_Burger_Menu_Size_-_687px_X_360px_1_2_2.jpg?v=1657012062" alt="">
</div>
</div>`

}
document.getElementById('navbar-bottom').innerHTML = navbar()
document.getElementById('navbarmenu').innerHTML=navbarmenu();

document.getElementById('hamburger').addEventListener('click',cross)
let flag = true;
function cross(){
   
    let x ;
    if(flag){
         x = document.querySelector('#hamburger').innerText
        document.querySelector('#hamburger').innerText = document.querySelector('h2').innerText
        document.querySelector('h2').innerText=x
        document.getElementById('navbarmenu').style.display = 'flex'
        flag = false;
    }else{
         x = document.querySelector('#hamburger').innerText
        document.querySelector('#hamburger').innerText = document.querySelector('h2').innerText
        document.querySelector('h2').innerText=x
        document.getElementById('navbarmenu').style.display = 'none'
        flag = true;
    }
   
}

export default navbar()

