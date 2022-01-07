function greaterTwoNumbers(){
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let printResult = document.getElementById("resultExerciseFive");

    if (num3 && num4) {  
        result = Math.max(num3, num4);
        printResult.innerHTML = "El número mayor es: " + result;          
    } else {  
        printResult.innerHTML = "Es necesario introducir dos números";         
    }   
}