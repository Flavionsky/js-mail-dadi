// sezione email

// definisco il mio contenitore e inserisco dentro le email
var emailArray = ['flaviomuscente@libero.it', 'muscenteflavio@libero.it', 'muscenteflavio@gmail.com', 'flaviomuscente@gmail.com', 'muscente_flavio@gmail.com'];

//assegno una variabile all'elemento input del DOM
var emailEnteredEl = document.getElementById('emailEntered');

//assegno una variabile al mio bottone
var searchBtnEl = document.getElementById('searchButton');

//dico al bottone le istruzioni che deve svolgere al click
searchBtnEl.addEventListener('click', function(){
  var messageOut = document.getElementById('message');
  messageOut.innerHTML = "email non presente nell'archivio";
  for (var i = 0; i < emailArray.length;  i++){

    emailArrayEnt = emailArray[i];
     if (emailArrayEnt == emailEnteredEl.value){
       messageOut.innerHTML = "email presente nell'archivio";
     }
  }
});


// sezione dadi

// prendo gli elementi dall'html e gli assegno una variabile
var dicesBtnEl = document.getElementById("dicesButton");
var rollMy = document.getElementById("myDice");
var rollPc = document.getElementById("pcDice");
var whoWinEl = document.getElementById("whoWin");

//definisco l'istruzione al bottone
dicesBtnEl.addEventListener("click", function () {
  //tiro i miei dadi e li inserisco in html
  rollMy.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);

  //tiro i dadi del pc e li inserisco in HTML
  rollPc.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);


  if ( rollMy.innerHTML > rollPc.innerHTML){

    whoWinEl.innerHTML = "Complimenti hai vinto!";
    whoWinEl.classList.remove("red");
    whoWinEl.classList.add("green");

  }else if ( rollMy.innerHTML == rollPc.innerHTML){

    whoWinEl.innerHTML = "Pareggio, Peccato!";

    whoWinEl.classList.remove("red");
    whoWinEl.classList.remove("green");
    
  } else if ( rollMy.innerHTML < rollPc.innerHTML){

    whoWinEl.innerHTML = "Ha vinto il pc, mi dispiace!";

    whoWinEl.classList.remove("green");
    whoWinEl.classList.add("red");
  }
});
