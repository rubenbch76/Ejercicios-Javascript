function divsOfTwoNumbers(){
    
    let numOne = parseInt(document.getElementById("numOneExerciseFifteen").value);
    let numTwo = parseInt(document.getElementById("numTwoExerciseFifteen").value);

    let printResult = document.getElementById("resultExerciseFifteen");
    printResult.innerHTML = "<p>";

    if (numOne && numTwo){

        let numSmaller = Math.min(numOne, numTwo);

        printResult.innerHTML += "Los números " + numOne + " y " + numTwo + " son divisibles por: ";

        for(i=1; i<=numSmaller; i++){
            if (numOne % i == 0 && numTwo % i == 0) { printResult.innerHTML += " " + i + " " }
            if (i == numSmaller/2) {i = numSmaller-1}
        } 
                 
        return;  
    }

    printResult.innerHTML = "Es necesario introducir dos números";

}