let id =""
let pass =""

function register(){
    id=document.getElementById("idUser").value;
    pass=document.getElementById("passUser").value;

    if(id && pass){
        alert("user added Succesfully")
    }else{
        alert("please fill fields")
    }
    document.getElementById("idUser").value = "";
    document.getElementById("passUser").value = "";
}
function login(){
    let userId=document.getElementById("idsave").value;
    let userPass=document.getElementById("passsave").value;

    if(userId =="" && userPass==""){
        alert("invalid")
    }
    else if(id === userId  && pass === userPass){
        alert("login Successfully")
    }else{
        alert("User not found in Record")
    }
    document.getElementById("idsave").value="";
    document.getElementById("passsave").value="";
    
}