
totalItem = localStorage.getItem("totalI");
totalAmount = localStorage.getItem("subtotal");
let ship = JSON.parse(localStorage.getItem("ship"));
console.log(ship)

document.querySelector("p").innerText +=  " "+totalItem;
document.querySelector("h3").innerText += " "+totalAmount

  let  {add,city,pin,phone} = ship

let div = document.querySelector("#ship")

let a = document.createElement('h3')
let c = document.createElement('h3')
let p = document.createElement('h3')
let ph = document.createElement('h3')

a.innerText = add
c.innerText = city
p.innerText = pin
ph.innerText = phone
div.append(a,c,p,ph)

let cardDetails = [
    {cardNum: "1234567", cvv: 456},
    {cardNum: "234567", cvv: 367}
]

document.querySelector("form").addEventListener("submit",checkData)

function checkData(){
    event.preventDefault()
    cardDetails.forEach(function(elem){
        if(elem.cardNum == document.querySelector("#cdNum").value){
            console.log(elem)
            if(elem.cvv == document.querySelector("#cvv").value){
                alert('PAYMENT SUCCESSFULL')
                window.location.href="index.html"
                
            }
            else{
                alert("wrong CVV")
            }
        }
    })
}