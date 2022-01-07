function primeNum(){
    
    let num = parseInt(document.getElementById("numExerciseSixteen").value);

    let printResult = document.getElementById("resultExerciseSixteen");
    printResult.innerHTML = "<p>";

    let contDivisors = 0;

    if (num){       

        for(i=2; i<=num/2; i++){
            if (num % i == 0) { contDivisors += 1; }          
        } 

        if (contDivisors == 0 && num != 1){
            printResult.innerHTML += "El número: " + num + " SI es PRIMO: ";
            return;
        }

        printResult.innerHTML += "El número: " + num + " NO es PRIMO: ";         
        return;  
    }

    printResult.innerHTML += "Es necesario introducir un número";

}