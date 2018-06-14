// var composers = ["BEETHOVEN","SHOSTAKOVICH","BRAHMS","PROKOFIEV","GLASS","ADAMS","MOZART","BERNSTEIN","BARBER","COPLAND","GERSHWIN","HINDEMITH","HOLST","MAHLER","WAGNER","MENDELSSOHN","RAVEL","STRAVINSKY","TCHAIKOVSKY","GRAINGER"]
var composers = ["beethoven","bach"]
//randomly select composer from composers array and log it to console
var composer = composers[Math.floor(Math.random()*composers.length)]

console.log(composer);

//calculate length of composer's name and log it to console
var length = composer.length;

console.log(length);

//generate empty string of same number of characters as composer's name (except wait though do i even want this or should it just put in the word, hide it, and reveal as guessed correctly)
//create a function that takes composer as input
function emptyGenerate(composerInput) {
    //create empty string to hold character positions
    var emptyArr = [];

    for (var x = 0; x < composerInput.length; x++) {
        emptyArr += x;
    }
    return emptyArr;
}

console.log(emptyGenerate(composer));

//display beginning number of remaining guesses WHY DOESNT THIS WORK
// var guessesRemain = 15;
// var p = document.getElementById("pRemain");
// console.log(p);
// p.textContent = guessesRemain;


//key push section
document.onkeyup = function(event) {
    //this function will run every time you press a key
    // console.log(event.key)

    //call the key pushed guessKey
    var guessKey = event.key;
    

    //if the key pushed is in the composer string
    for (var x in composer) {
        if ( guessKey == composer[x]) {
            var correctArr = [];
            // var incorrectString = "";
            //log the positions of the correctly guessed letters (to display)
            console.log(x);
            var h1 = document.getElementById("correctGuess");
            console.log(h1);
            //the text to be displayed in the window
            correctArr.splice(1,0,composer[x]);
            //want to add composer[x] to correctArr in position x (and display it)HOW
            h1.textContent = correctArr;
        }
        //guesses remaining
        else if (guessKey !== composer[x]) {
            // var guessRemain = 15;
            guessesRemain--;
            // console.log(guessesRemain);
            var p = document.getElementById("pRemain");
            console.log(p);
            p.textContent = guessesRemain;
        }
        
        
        
        
        
        
        // else if (guessKey !== composer[x]){
            
        //     console.log(guesskey);

        // }
    }

}








//
// document.onkeyup = function(event) {
//     var letterGuess = event.key;
//     for (var x in composers[composer]) {
//         if (letterGuess === x ) {
//             console.log(letterGuess);
//         }
//         else {
//             return false;
//         }
//     }
// }

// for ( var composer in composers ) {
//     console.log(composer(composers[Math.floor(Math.random()*composers.length)]));
// }