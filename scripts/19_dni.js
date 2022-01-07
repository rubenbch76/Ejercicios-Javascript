/* import { detectEnter } from "./enter_detect.js"; */

function dni(){
    
    let num = parseInt(document.getElementById("numExerciseNineteen").value);

    let printResult = document.getElementById("resultExerciseNineteen");
    printResult.innerHTML = "<p>";

    let resultCalc = 0;
    let letter = "";

    let letterList = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    if (num >= 0 && num <= 99999999){    
        
        resultCalc = num % 23;
        letter = letterList[resultCalc];

        printResult.innerHTML += "La letra correspondiente es: " + letter + "<p>DNI completo: " + num + "-" + letter + "</p>";
        return;
       
    }

    printResult.innerHTML += "Introduzca un número entre 0 y 99.999.999";

}


/* detectEnter("numExerciseNineteen", "buttonNineteen"); */
