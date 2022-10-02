
let register = document.getElementById("sub");
    register.addEventListener("mousehover",function(){
         register.classList.add("submit-zoom");
         register.classList.remove("submit");
         });
         register.addEventListener("mouseout",function(){
         register.classList.remove("submit-zoom");
         register.classList.add("submit");
        });


function validation(){
    var username = document.getElementById("uname");
    var mothersname = document.getElementById("mname");
    var fathersname = document.getElementById("fname");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone"); 
    var mail = document.getElementById("mail");
    
    if(username.value == "" || address.value == "" || mothersname.value == "" || fathersname.value == "" || phone.value == "" || mail.value == ""){
        alert("There was somewhere blank .  Please fill it up");
        return false;
    }
    else{
        return true;
    }
}


