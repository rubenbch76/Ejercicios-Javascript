function addTwoNumbers(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let printResult = document.getElementById("resultExerciseFour");

    if (num1 && num2) {  
        result = parseInt(num1)+parseInt(num2);
        printResult.innerHTML = num1 + " + " + num2 + " = " + result;          
    } else {  
        printResult.innerHTML = "Es necesario introducir dos números";         
    }   
}