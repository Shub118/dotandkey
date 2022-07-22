let stotal = JSON.parse(localStorage.getItem('subtotal')) || 1;

document.querySelector('#total').innerText = `RS- ${stotal}`