function divsOfNumber(){
    
    let num = parseInt(document.getElementById("numExerciseFourteen").value);

    let printResult = document.getElementById("resultExerciseFourteen");
    printResult.innerHTML = "";

    if (num){

        printResult.innerHTML += "El número: " + num + " es divisible por: ";

        for(i=1; i<=num; i++){
            if (num % i == 0) { printResult.innerHTML += " " + i + " " }
            if (i == num/2) {i = num-1}
        } 
                 
        return;  
    }

    printResult.innerHTML = "Es necesario introducir un número";

}