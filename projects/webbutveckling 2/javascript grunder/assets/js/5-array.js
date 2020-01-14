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

printToScreen.innerHTML = colors.join('<br />');


colors.pop();
printToScreen.innerHTML = colors.join('<br />');

colors.push('purple');
printToScreen.innerHTML = colors.join('<br />');

colors.unshift('yellow');
printToScreen.innerHTML = colors.join('<br />');

colors.shift();
printToScreen.innerHTML = colors.join('<br />');

var colorGreen = colors.slice(1, 3);
printToScreen.innerHTML = colorGreen.join(' ');

var colorsCopy = colors.slice(colors);
printToScreen.innerHTML = colorsCopy.join(' ');

printToScreen.innerHTML = colors.indexOf('green');
printToScreen.innerHTML = colors.indexOf('yellow');

var cars = ['volvo, bmw, ford, nissan, saab']
for(var i = 0; i < cars.length; i++) {
    printToScreen.innerHTML += cars[i] + '<br />';
}


printToScreen.innerHTML = cars.reverse(); 


var countries = ['sweden', 'germany', 'norway', 'spain'];
countries.forEach(function(country) {
    printToScreen.innerHTML += country + '';
});

