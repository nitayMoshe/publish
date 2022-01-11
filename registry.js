
//let inputList = document.getElementsByClassName("inputs");
//for(let i = 0; i < inputList.length; i++){
//    inputList[i].value = "name";
// };
var a = document.getElementById("star1");
var b = document.getElementById("star2");



function sub(){
   
   var inputList = document.getElementsByClassName("inputs");
   
    var data = {};
    for (let i = 0; i < inputList.length; i++) {
        data[inputList[i].id] = inputList[i].value;
    }
     console.log(data);
    
     if (validate (data.password, data.valPassword)){
    location.reload();
    return data;
    }

    else{
    alert("alerted");
    a.style.display="inline-block";
    b.style.display="inline-block";
    }
}

function validate(p1, p2){
   if (p1 === p2){
    return true;
   }
   else{return false}
}

function show(){
var pass = document.getElementById("password");
var valpass = document.getElementById("valPassword");
if(pass.type === "password"){
    pass.type = "text";
}
else{pass.type = "password";}

if(valpass.type === "password"){
    valpass.type = "text";
}
else{valpass.type = "password";}
}