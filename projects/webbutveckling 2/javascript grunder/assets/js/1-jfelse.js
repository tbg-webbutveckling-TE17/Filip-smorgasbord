//alert ('are we connected') pop up

var myName = "Filip"; // datatyp: string
var myAge = 18; //datatyp: number
var isEvil = false; //datatyp: boolean

// single line comment
/*
      block comment
*/

/*

         if/else
*/

if(myAge < 18) {
   //alert('you can not take a drivers license')
} else {
   //alert('congrats')
}

if (myName == 'Filip') {
    //alert('welcome,' + myName);
} else {
    //alert('you are not welcome')
}

if (myAge == '32'){ // == equals to, === equals to and same datatyp
   // alert('welcome')
} else {
   // alert('you are not welcome')
}

var hasWatched = false; // add to watchlist

if(isEvil == true) {
   // alert('du är ond')
} else {
    //alert('du är god')
}

/* 
****************************
   guessing app
***************************
*/

var secretNumber = 7;
var userinput = Number(prompt('guess a number between 0 - 10'));

if(userinput === secretNumber) {
     document.writeln('grattis! du har gissat rätt <br>');
} else if( userinput === 6 || userinput === 8) {
  document.writeln('det bräns');
} else if(userinput > secretNumber) {
   document.writeln("du gissar för lågt")

} else {
   document.writeln('du gissade för lågt')

}
// if userinput === 6 or 8 'det bräns
// if userinput is less than secretNumber "du gissar för lågt"
// if userinput is greater than secretNumber "du gissade för högt"