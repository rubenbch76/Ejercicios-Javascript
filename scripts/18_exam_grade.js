function examGrade(){
    
    let num = parseInt(document.getElementById("numExerciseEighteen").value);

    let printResult = document.getElementById("resultExerciseEighteen");
    printResult.innerHTML = "<p>";

    if (num){       

        if (num < 3) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es MUY DEFICIENTE";
            return;
        }
        if (num < 5) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es INSUFICIENTE";
            return;
        }  
        if (num < 6) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es SUFICIENTE";
            return;
        }  
        if (num < 7) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es BIEN";
            return;
        }   
        if (num < 9) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es NOTABLE";
            return;
        }   
        if (num <= 10) {
            printResult.innerHTML += "Nota: " + num + " - La calificación es SOBRESALIENTE";
            return;
        }                    
    }

    printResult.innerHTML += "Introduzca una nota entre 0 y 10";

}