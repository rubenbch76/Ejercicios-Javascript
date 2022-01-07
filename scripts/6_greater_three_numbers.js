function greaterThreeNumbers(){
    let num1of3 = parseInt(document.getElementById("num1of3").value);
    let num2of3 = parseInt(document.getElementById("num2of3").value);
    let num3of3 = parseInt(document.getElementById("num3of3").value);

    let printResult = document.getElementById("resultExerciseSix");

    if (num1of3 && num2of3 && num3of3) {  
        result = Math.max(num1of3, num2of3, num3of3);
        printResult.innerHTML = "El número mayor es: " + result;          
    } else {  
        printResult.innerHTML = "Es necesario introducir tres números";         
    }   
}