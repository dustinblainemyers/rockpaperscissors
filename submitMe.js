
/*
Vison:

This function takes no parameters, yet .  I understand that it will need to to have parameters to qualify as "functional programming".  Later I may wrap this as a method inside of a class that I create.

Description:

This function is meant to be called from an event listener.  It declares a variable , playerSelection, and sets it equal to the playerInput HTML element.
*/

function submitMe(playerSelection) {
    document.getElementById("roundresults").innerHTML = ' ';
    document.getElementById("output").innerHTML = 'shouldnotseethis';
    document.getElementById("currentRound").innerHTML = gameObject.roundCurrent;
    //need to change gameTally to roundTally or something more appropriate so everything 
    //matches.

   playRound(playerSelection, computerPlay());
    }
    
    
    