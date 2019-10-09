var answer = prompt('are we there yet');

//while(answer !="yes" && answer!="yeah"){
  // var answer = prompt('are we there yet')
//}


while(answer.toLowerCase().indexOf('ye') === -1 ) {
   var answer = prompt('are we there yet');
} 
alert('we finally made it')
