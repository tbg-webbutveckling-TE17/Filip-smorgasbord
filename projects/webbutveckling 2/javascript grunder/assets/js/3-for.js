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