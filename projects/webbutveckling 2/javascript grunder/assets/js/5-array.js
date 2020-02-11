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
printToScreen.innerHTML = '';
var subjects = [''];
subjects.push('svenska 3', 'matematik 5', 'fysik 2');
subjects.forEach(function(subject) {
printToScreen.innerHTML += subject + ' ';
});

printToScreen.innerHTML = '';
PrintReverse([ 1, 2, 3, 4, 5, 6, 7 ])
function PrintReverse(Array) {
    for (var i = Array.length - 1; i >= 0; i--) {
        printToScreen.innerHTML += Array[i] + '';
    }
}
function isIdentical(array) {
    var first = array[0];
    for (var i = 1; i < array.length; i++) {
        if(array[i] !== first) {
            return false
        }
    } 
    return true
}

isIdentical([1, 1, 1, 1, 1, 1, 1])
isIdentical([1, 1, 1, 2, 1, 1, 1])

function sumArray(array) {
	var total = 0;
	array.forEach(function(value) {
		total += value;
	});
	printToScreen.innerHTML = total;
	return total;
}

sumArray([ 1, 2, 3, 4, 5 ]);

function max(array) {
	var maximum = array[0];
	array.forEach(function(index) {
		if (index > maximum) {
			maximum = index;
		}
	});
}
max([ 2, 1, 23, 54, 4, 12 ]);



