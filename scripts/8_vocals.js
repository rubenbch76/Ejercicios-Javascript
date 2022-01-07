/* import { detectEnter } from "./enter_detect.js"; */

function searchVocals()
{
   let text = getPhrase();

   let listVocals = text.match(/[aeiouáéíóú]/gi);
   let vocals = "";

   let aLetters = text.match(/[aá]/gi);
   let eLetters = text.match(/[eé]/gi);
   let iLetters = text.match(/[ií]/gi);
   let oLetters = text.match(/[oó]/gi);
   let uLetters = text.match(/[uú]/gi);

   let contA = 0;
   let contE = 0;
   let contI = 0;
   let contO = 0;
   let contU = 0;

   if (listVocals){

      listVocals.forEach(element => {
         vocals += element;
      });

      if (aLetters) {contA = aLetters.length;}
      if (eLetters) {contE = eLetters.length;}
      if (iLetters) {contI = iLetters.length;}
      if (oLetters) {contO = oLetters.length;}
      if (uLetters) {contU = uLetters.length;}
   } 

   imprimir(text, vocals, contA, contE, contI, contO, contU); 
}

function getPhrase()
{
   let phrase = document.getElementById("textToConvert").value;
   return phrase;
}

function imprimir(text, vocals, contA, contE, contI, contO, contU)
{
   let printResult = document.getElementById("resultExerciseEight");
   printResult.innerHTML = "";

   if (text == "") {
      printResult.innerHTML = "Es necesario introducir un texto";
      return;
   }

   printResult.innerHTML += "<p> <b>Texto original:</b> " + text + "</p>";

   printResult.innerHTML += "<p> <b>Vocales del texto:</b> " + vocals + "</p>";

   printResult.innerHTML += "Hay " + contA + " letras A <br>";
   printResult.innerHTML += "Hay " + contE + " letras E <br>";
   printResult.innerHTML += "Hay " + contI + " letras I <br>";
   printResult.innerHTML += "Hay " + contO + " letras O <br>";
   printResult.innerHTML += "Hay " + contU + " letras U <br>";

   printResult.innerHTML += "<p>En total hay " + vocals.length + " vocales </p> <hr>";
}

/*imposible hacer un import de esta función. El HTML decía que la función searchVocals() no estaba definida. En el script 8_vocals.js del HTML hubo que poner type="module" porque también fallaba el import*/

function detectEnter(idText, idButton){
   var input = document.getElementById(idText);
   input.addEventListener("keyup", event => {
      if (event.key === "Enter") {
         event.preventDefault();
         document.getElementById(idButton).click();
      }
   });
}

detectEnter("textToConvert", "buttonVocals");






   /* USANDO IF

   let caracter = "";
   for (i = 0; i < text.length; i++) {
      caracter = text.charAt(i).toLowerCase();
      if (caracter)
      if( caracter == "a" || caracter == "á") {
         vocals = vocals + caracter;
         contA += 1;
      }
      if( caracter == "e" || caracter == "é") {
         vocals = vocals + caracter;
         contE += 1;
      }
      if( caracter == "i" || caracter == "í") {
         vocals = vocals + caracter;
         contI += 1;
      }
      if( caracter == "o" || caracter == "ó") {
         vocals = vocals + caracter;
         contO += 1;
      }
      if( caracter == "u" || caracter == "ú") {
         vocals = vocals + caracter
         contU += 1;
      }

      USANSO SWITCH
      
      switch (caracter){
         case "a":
         case "á":
         case "A":
         case "Á":
            vocals = vocals + caracter;
            contA += 1;
            break;
         case "e":
         case "é":
         case "E":
         case "É":
            vocals = vocals + caracter;
            contE += 1;
            break;
         case "i":
         case "í":
         case "I":
         case "Í":
            vocals = vocals + caracter;
            contI += 1;
            break;
         case "o":
         case "ó":
         case "O":
         case "Ó":
            vocals = vocals + caracter;
            contO += 1;
            break;
         case "u":
         case "ú":
         case "U":
         case "Ú":
            vocals = vocals + caracter;
            contU += 1;
            break;
      } 

   }*/
