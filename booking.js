function formvalidation()
{
    var phoneNum=document.getElementById("phone");
var whatsapp=document.getElementById("whatsapp");

var phone=/^\d{10}$/;

if(!phone==test(phoneNum)){
    alert("Please enter a valid phone number");
    return false;
}

if(!phone==test(whatsapp)){
    alert("Please enter a valid whatsapp number");
    return false;
}

alert("Your registration is done")
return true;
}