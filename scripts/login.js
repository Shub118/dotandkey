
import {navbar,navbarmenu,cross} from "./navbar.js"


document.getElementById('navbar-bottom').innerHTML = navbar()
document.getElementById('navbarmenu').innerHTML=navbarmenu();


document.getElementById('hamburger').addEventListener('click',cross);

import footer from "./footer.js"

document.getElementById("footer").innerHTML = footer();

var form = document.querySelector("#form");
    var userData = JSON.parse(localStorage.getItem("userData"))

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var data = {
            email: form.email.value,
            password: form.password.value,

        }
//console.log(data);  
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        
      
        if (email.length === 0 && password.length === 0) {
            alert("Please enter the details")
        }
        else if (email.length === 0) {
            alert("Please enter the email");
        }
        else if (password.length === 0) {
            alert("Plese enter the password");
        }
        else if (userData.email !== email) {
            alert("Invalid account");
        }
        else if (userData.password !== password) {
            alert("Invalid password")
            //window.location.href = "signup.html"
        }
       
        if ((userData.email === data.email && userData.password === data.password) && (email.length !== 0 && password.length !== 0))  {
            alert("Sign in Successfully");
            localStorage.setItem("signin", JSON.stringify(userData));

            window.location.href = "index.html"
        }

       
       
       
       


        // if {
        //     alert("Sign in Successfully");
        //     window.location.href = "index.html"
        //     localStorage.setItem("signin", JSON.stringify(userData));
        // }
        
        
        







    })