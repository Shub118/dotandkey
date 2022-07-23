function display(data,container){
    data.forEach((element)=>{
        let prod = document.createElement("div");
 

        let images = document.createElement("img");
        images.setAttribute("class", "prodImage")
        images.src= element.image;

        let discount = document.createElement("p");
        discount.setAttribute("class", "discount");
        discount.innerText = `SAVE ${element.discount}%`;

        let ratRev = document.createElement("div");
        let star = document.createElement("div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "fa fa-star checked");
        star.setAttribute("class", "ratingrev")

        let rat = document.createElement("p");
        rat.style = "margin-left:5px;"
        rat.innerText = element.rating;

        let pers = document.createElement("p");
        pers.style = "color:blue; margin-left:5px; margin-top:13px";
        pers.innerText = element.person;
        star.append(span1, rat, pers);
        ratRev.append(star);


        let prodNam = document.createElement("p");
        prodNam.setAttribute("class", "prodName");
        prodNam.innerText = element.title;


        let prices = document.createElement("div");
        prices.setAttribute("class", "price");
        let strikepric = document.createElement("span");
        strikepric.setAttribute("class", "strikeprice")
        strikepric.innerText = `Rs.${element.strikedprice}.00`;

        let prodPric = document.createElement("p");
        prodPric.setAttribute("class", "prodPrice");
        prodPric.innerText = `Rs.${element.price}.00`;
        prices.append(strikepric,prodPric);

        let btn = document.createElement("button");
        btn.setAttribute("class", "button");
        btn.innerText = "ADD TO CART";
        btn.addEventListener("click", function () {
            addCart(element);
        });
        prod.addEventListener("click",()=>{
            localStorage.setItem("description",JSON.stringify(element))
            console.log(element)
            window.location.href="desc.html"
          })
        prod.setAttribute("class","prod");
        prod.append(discount, images, ratRev, prodNam, prices, btn);
        container.append(prod);
    })
}

export default display;