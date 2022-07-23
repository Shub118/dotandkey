let stotal = JSON.parse(localStorage.getItem('subtotal')) || 1;

document.querySelector('#total').innerText = `RS- ${stotal}`

function construct (a,c,pc,p){
    this.add = a
    this.city = c
    this.pin = pc
    this.phone = p
}
document.querySelector('a+button').addEventListener('click',()=>{
    let add = document.querySelector('#add').value
    let city = document.querySelector('#city').value
    let pin = document.querySelector('#pc').value
    let phone = document.querySelector('#phone').value
    if(add.length<1 && city.length<1 && pin.length<1 && phone.length<1){
        alert('Fill all inputs')
    }else{
        let x = new construct(add,city,pin,phone)
        localStorage.setItem("ship",JSON.stringify(x))
        window.location.href = 'payment.html'
    }
    
})

document.querySelector("#apply").addEventListener("click",apply);

function apply (){
  if(document.querySelector("#promo").value == "MASKP"){
        stotal = stotal-(stotal*3/10)
    }
    document.querySelector('#total').innerText = `RS- ${stotal}`
}
