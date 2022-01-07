function detectEnter(idText, idButton){
    var input = document.getElementById(idText);
    input.addEventListener("keyup", event => {
       if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById(idButton).click();
       }
    });
}

export { detectEnter };
