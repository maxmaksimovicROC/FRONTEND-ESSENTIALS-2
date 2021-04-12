function toonAlert(){
    alert("Alert box opgeroepen door mijn eerste functie!");
}
function toonPrompt(){
    prompt("voer iets in");
    console.log(toonPrompt());
}
function toonConfirm(){
    var txt;
    if (confirm("Press a button!")) {
        txt = "Je Hebt Op Oke Gedrukt";
      } else {
        txt = "...";
      }
      document.getElementById("demo").innerHTML = txt;
}

