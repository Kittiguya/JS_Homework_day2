console.log('JAVASCRIPT IS SCARY WAAAAH')




//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function faveFood(person3){
    for (let key in person3) {
        console.log(`${key}`);
        if (Array.isArray(person3[key])){
            person3[key].forEach(item => console.log(`${item}`));
        } else if (typeof person3[key] === 'object'){
            for (let subKey in person3.shakes([0])){
                if (Array.isArray(person3.shakes[0])){
                    console.log(`${subKey}`);
                    person3.shakes([subKey].forEach(item => console.log(`${item}`)));
                } else {
                    console.log(`${subKey}: ${person3[key][subKey]}`);
                }
            }
        } else {
            console.log(`${person3[key]}`)
        }
    }
}
  
// I COMPLETELY GAVE UP ON THIS ONE. I CANT FIGURE IT OUT. Accessing the objects from the key Shakes has me absolutely shook. I cannot figure it out or find stuff about it
// I hate giving up, but i really think im stumped. Why is Javascript soo hard. I could do that using Python im sure!!
// yeah i cant figure this out. Its literally broken my mind. 

faveFood(person3)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// console.log(Person)
// // Use an arrow to create the printInfo method
//  printInfo = () => {
//         console.log(`This person is ${this.age} years old, and their name is ${this.name}`)
// }
// // Create another arrow function for the addAge method that takes a single parameter
//     // Adding to the age 
// addAge = () => {
//     this.age += years;
// }

// const person1 = new Person('Robin', 29);
// const person2 = new Person('Blaine', 28);

// console.log(person1.addAge(3))

/* 
sorry for the commented out above. I followed it step by step then below i threw it all together to make it work and function on my browser.
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        console.log(`This person is ${this.age} years old, and their name is ${this.name}`)
    }
    addAge = (years) => {
        this.age += years;
    }
}
const person1 = new Person('Robin', 29);
const person2 = new Person('Blaine', 27);

console.log(person1)
console.log(person1.addAge(3))
person1.printInfo()
console.log(person2)
console.log(person2.addAge(5))
person2.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



function promised(str) {
    return new Promise((resolve, reject) => {
        if (str.length>10){
            resolve("Big word");
        } else {
            resolve("Small number");
        }
    });
}

console.log(promised("hello"))
console.log(promised("Hello my name is Morty"))




// BELOW HERE IS CODEWARS PROBLEMS 1 AND 2

// CODE WARS PROBLEM 1 PREVIOUSLY COMPLETED USING PYTHON:
/* 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too
*/

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let num of arr1){
      sum += num;
    }
    for (let num of arr2) {
      sum += num;
    }
    return sum; 
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))

// CODE WARS PROBLEM 2 NOT COMPLETED PREVIOUSLY 

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash (words) {
    return words.join(' ');
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']))

// Having code wars on other monitor feels like im cheating for this. Granted this is as easy as they come.