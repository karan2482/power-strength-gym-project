var attempt = 3; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var pass= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
var user=/^[a-zA-Z]{30}$/;


if (password.match(pass)  )
{
    alert("correct password");
}
else
{
    alert("incorrect password")
}
if (password.match(pass) )
{
alert ("Login successfully");
window.location = "file:///D:/project%20collection/abhi/login.html#"; 
return false;
}
else
{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}