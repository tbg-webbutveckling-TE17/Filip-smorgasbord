var friend1 = 'måns';
var friend2 = 'sten';
var friend3 = 'claes';
var friend4 = 'mona';

var friends = ['Måns', 'sten', 'claes', 'mona'];
var printToScreen = document.getElementById("testArray");
printToScreen.innerHTML = friends[0];

function newName() {
    friends[1] = "patrik";
}

var colors = [];
var colors = new Array();
var randomarray = ['hej', 21, false, true, {} ];
printToScreen.innerHTML = randomarray.length;

colors = ['red', 'green', 'blue' ]
colors.pop();
printToScreen.innerHTML = colors.join('<br />');

