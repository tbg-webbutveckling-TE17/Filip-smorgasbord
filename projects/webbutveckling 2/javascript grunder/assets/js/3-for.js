for(var i = 0; i < 6; i++) {
    console.log(i);
}

var str = 'hello world';
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var myArr = ["HTML", "CSS", "JS", 42, true];
var len = myArr.length;
for (var i = 0; i < len; i++) {
    console.log(myArr[i]);
}

for (var i = -10; i < 20; i +=1) {
    console.log(i);
}

for (var i = 10; i < 42; i +=2) {
    console.log(i);
}
for (var i = 301; i < 335; i +=2) {
    console.log(i);
}
for (var i = 5; i < 50; i++) {

};

var rows = 5
var cols = 5

for (var i = 0; i < rows; i++) {
    for (var ii = 0; ii < cols; ii++) {
    document.writeln('*');
    }
    document.writeln('br/>');
}


var multi = 9
for (var i = 0; i < 10; i++) {
    var result = i * multi
    document.writeln(multi + ' * ' +i+ ' = ' + result)
}





var food = ['nudlar', 'pannkaka', 'palt', 'tacos'];
for(i = 1; i <= food.length; i++) {
}   if(i == 1) {
    document.writeln("My # " + i + food[i-1]);
} else if(i == 1) {
    document.writeln("my #" + i + food[i-1]);
} else if(i == 1) {
    document.writeln("my #" + i + food[i-1]);
} else if(i == 1) {
    document.writeln("my #" + i + food[i-1]);
} else if(i == 1) {

}
for(var i = 10; i >=0; i--) {
    for(var ii=0; ii <= i; ii++) {

    document.write('* ');
}
document.write('<br>')
}
for(var i = 10; i <=0; i++) {
    for(var ii = 0; ii <= i; ii++) {
        document.write('* ');
    }
    document.write('<br />');

}

var rows = 5
for(var i = 1; i <= rows; i++) {
    for(var j = 1; j <= rows - i; j++) {
        document.write('&nbsp');
    }
    for(var k = 1; k <= i; k++) {
        document.write('* ');
    }
    document.write('<br />');
}

function isEven(x) {
    if(x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, '_');
    return newStr;

}
kebabToSnake('This-is-a-kebab-cased-string');



function localscope() {
    var showScope = 31;
    console.log(showScope);
}

localscope();
console.log(showScope);

var showScope = "im a global variable";
console.log(showScope)

var showGlobalVar = 99; //global variable
function globalscope () {
    showGlobalVar = 100;
    console.log(showGlobalVar);
}

console.log(showGlobalVar);
globalscope();
console.log(showGlobalVar);

function hi() {
    var name = 'are'
    console.log(name);
}

hi();

function bye() {
    console.log(name);
}

bye();

function sing() {
    console.log('im singing in the rain');
    console.log('just singing in the rain');
    console.log('what a glorious feeling!');
}

setInterval(sing, 2000);
clearInterval(1);

var intervalExample = setInterval(sing, 2000)
clearInterval(intervalExample);
var anon = setInterval(function() {
    console.log('im an anonomous function');
}, 1500);

clearInterval(anon);

function myTimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById('timeOutput').innerHTML = time;
}

myTimer();

var myTime = setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName('button')[0];
stopBtn.addEventListener('mouseenter', function() {
     clearInterval(myTime);
     alert('time is stopped');
});

stopBtn.addEventListener('mouseleave', function() {
     myTime = setInterval(myTimer, 1000);
    
});


function calculateTip(total) {
    var tipPercent = 0.15;
    return total * tipPercent;
}

//var billTotal = prompt('Quanto costa?');
//var billTip = calculateTip(billTotal);
//var receipt = "bill total: " + billTotal + "tip:" + billTip;
//console.log(receipt);


//var displayfortune = document.getElementsByClassName('fortune')[0];
//function tellFortune(jobTitle, geoloc, partnerName, children, ) {
//var Fortune = 'you will be a ' + jobTitle + ' in ' + geoloc + ' with ' + partnerName + ' with ' + children + ' kids '
//displayfortune.innerHTML = Fortune;
//tellFortune('jobTitle', 'geoloc', 'partnerName', 'children');


//function tellFortune(jobTitle, geoloc, partnerName, children) {
  //  var tellFuture = 'you will be a ' + jobTitle + 'in' + geoloc + 'and married to' + partnerName + 'with' + children + 'kids'
    //var printOut = document.getElementsByClassName('displayfortune')[0];
    //printOut.innerHTML = tellFuture;


//var jobTitle = ['president', 'janitor', 'lumberjack',];
//var geoloc = ['lycksele', 'stockholm', 'kiruna,'];
//var partnerName = ['emma', 'sasha', 'amy'];
//var children = [3, 4, 2 ];

//var fortunebtn = document.getElementsByTagName('button')[1];
//fortunebtn.addEventListener('mouseenter', function() {
  //  var randomJob = jobTitle[Math.floor(Math.random() * jobTitle.length)];
   // var randomGeo = geoloc[Math.floor(Math.random() * geoloc.length)];
   // var randomPartner = partnerName[Math.floor(Math.random() * partnerName.length)];
    //var randomChildren = children[Math.floor(Math.random() * children.length)];
    
    //tellFortune(randomJob, randomGeo, randomPartner, randomChildren);

   // var dogAge = prompt('how old is you dog in human years?')
   // function calculateDogAge(dogAge) {
    //  var displayDogYears = document.getElementsByClassName('dog')
     // var dogYears = dogAge * 7
     // var tellDogYears = 'your dog is' + dogYears + 'years old as a human'

     // displayDogYears.innerHTML = tellDogYears
    


    //calculateDogAge(dogAge)

    function calculatesupply(age, supplyPerDay) {
    var maxAge = 100
    var needed = supplyPerDay * maxAge - age;
    alert('you will need' + needed + '... each day to last you until the age of' + maxAge);
}
var age = prompt('what is your age?')
var supplyPerDay = 
calculatesupply(age, supplyPerDay);










