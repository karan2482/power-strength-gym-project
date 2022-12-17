function validatee(){
var full_name = document.getElementById("fullname").value;
var parentsname = document.getElementById("parentsname").value;
var address = document.getElementById("address").value;
var city = document.getElementById("city").value;
var email = document.getElementById("email").value;
var repeatpassword = document.getElementById("password").value;
var password = document.getElementById("password").value;
var pass= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
var email= /^(?=.*[0-9])(?=.*[!@#$%^&*]{5})[a-zA-Z0-9!@#$%^&*]{7,15}$/;
var user=/^[a-zA-Z]{30}$/;
if (full_name.match(user)  )
{
    alert("correct name entered");
}
else
{
    alert("incorrect name")
}
}