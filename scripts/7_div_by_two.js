function divByTwo(){
    
    let num = parseInt(document.getElementById("numExerciseSeven").value);

    let printResult = document.getElementById("resultExerciseSeven");

    if (num){

        if (num % 2 == 0) {  
            printResult.innerHTML = "El número: " + num + " SI es divisible por 2"; 
            return;         
        }  
        
        printResult.innerHTML = "El número: " + num + " NO es divisible por 2";         
        return;  
    }

    printResult.innerHTML = "Es necesario introducir un número";

}