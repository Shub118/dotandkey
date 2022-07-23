

import {navbar,navbarmenu,cross} from "./navbar.js"

import footer from "./footer.js"

document.getElementById("footer").innerHTML = footer();


var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        var data = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            password: form.password.value,
        }

        let first_name = document.getElementById("first_name").value;
        let last_name = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;


        if (first_name.length !== 0 && last_name.length !== 0 && email.length !== 0 && password.length !== 0) {
            // alert("Please fill the deatils first")
            localStorage.setItem("userData", JSON.stringify(data));
            window.location.href = "login.html";
        }
        if (first_name.length === 0 && last_name.length === 0 && email.length === 0 && password.length === 0) {
            alert("Please fill the details")
        }
        else if (first_name.length === 0) {
            alert("Please fill the first_name")
        }
        else if (last_name.length === 0) {
            alert("Please fill the last_name")
        }
        else if (email.length === 0) {
            alert("Please fill the email")
        }
        else if (password.length === 0) {
            alert("Please fill the password")
        }


    })
    document.getElementById('navbar-bottom').innerHTML = navbar()
document.getElementById('navbarmenu').innerHTML=navbarmenu();

document.getElementById('hamburger').addEventListener('click',cross);