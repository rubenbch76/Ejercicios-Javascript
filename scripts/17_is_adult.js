function isAdult(){
    
    let num = parseInt(document.getElementById("numExerciseSeventeen").value);

    let printResult = document.getElementById("resultExerciseSeventeen");
    printResult.innerHTML = "<p>";

    if (num){       

        if (num >= 18) {
            printResult.innerHTML += "Tiene " + num + " años, por lo que SI es mayor de edad";
            return;
        }          

        printResult.innerHTML += "Tiene " + num + " años, por lo que NO es mayor de edad";
        return;     
    }

    printResult.innerHTML += "Es necesario introducir la edad";

}