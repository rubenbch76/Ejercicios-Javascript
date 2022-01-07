function showName(){
    let name = document.getElementById("nameText").value;

    if (name) {  
        document.getElementById("nameDiv").innerHTML = "Su nombre es: " + name;          
    } else {  
        document.getElementById("nameDiv").innerHTML = "Es necesario introducir su nombre";         
    }   
}

