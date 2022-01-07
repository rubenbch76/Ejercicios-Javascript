function divBy2357(){
    
    let num = parseInt(document.getElementById("numExerciseTwelve").value);

    let printResult = document.getElementById("resultExerciseTwelve");
    printResult.innerHTML = "";

    if (num){

        let divByTwo = num % 2;
        let divByThree = num % 3; 
        let divByFive = num % 5; 
        let divBySeven = num % 7; 

        if (divByTwo && divByThree && divByFive && divBySeven) {
            printResult.innerHTML += "El número: " + num + " NO es divisible por 2, 3, 5 o 7 ";
            return;
        }

        printResult.innerHTML += "El número: " + num + " es divisible por: ";

        if (divByTwo == 0) { printResult.innerHTML += " 2 "}
        if (divByThree == 0) { printResult.innerHTML += " 3 "}  
        if (divByFive == 0) { printResult.innerHTML += " 5 "}  
        if (divBySeven == 0) { printResult.innerHTML += " 7 "}   
                 
        return;  
    }

    printResult.innerHTML = "Es necesario introducir un número";

}