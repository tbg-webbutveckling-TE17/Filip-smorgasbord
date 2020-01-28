var output = document.querySelector('body > p');
var person = ['Sid', 31, 'EagleShieldBay']

output.innerHTML = person[2]

var persona = {
    name: "sid",
    age: 41,
    hometown: "heresneezedduck"
};

persona.hometown = 'buy a harbor';

output.innerHTML = persona.name + ' lives in ' + persona.hometown;

var oddNums = {};
oddNums.number = 1;
oddNums.str = "one";
oddNums.isOdd = true;

output.innerHTML = oddNums.number;

var dog = {
    name: "doggo",
    breed: "golden",
    age: 3,
    isFriendly: true
}

var cat = new Object();
cat.name = "smilla",
cat.age = 3;
output.innerHTML = cat.name;

var junkObject = {
    name: "junk",
    age: 33,
    color: "space gray",
    isEvil: false,
    friends: ['daruk', 'revali', 'urboas'],
    pet: {
        name: 'chalie',
        species: 'pig',
        age: 9
    }


};

output.innerHTML =  junkObject.pet.species;

var posts = [
 {
    author: 'jon',
    title: 'backpack',
    comments: 'bad',
 },
 {
    author: 'ben',
    title: 'NHL prospects',
    comments: 'good',
 },
 {
    author: 'jimmy',
    title: 'human history',
    comments: 'good book',
}

];

output.innerHTML = ' author ' + posts[1].author + ' comments ' + posts[1].comments;
