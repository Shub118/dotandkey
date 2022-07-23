totalItem = localStorage.getItem("total");
totalAmount = localStorage.getItem("totalA");
document.querySelector("p").innerText +=  " "+totalItem;
document.querySelector("h3").innerText += " "+totalAmount

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
                window.location.href="otp.html"
                
            }
            else{
                alert("wrong CVV")
            }
        }
    })
}