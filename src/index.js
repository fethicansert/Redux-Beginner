import { compose, pipe } from 'lodash/fp'
import { Map } from 'immutable';


// const mutant = { name: 'Wolverine'};
// mutant.isPowerFull = true; //Add the prortie if it not exist
// console.log(mutant);

let book = Map({ title: "Harry Potter" });

// console.log(book); //Hard to use wtih other libraris beacuse it not like js object now
// console.log(book.title); //returns undefined
// console.log(book.get('title')); // I have to get method to ge
// console.log(book.toJS());

const publish = (book) => {
    return book.set('isPublished',true); // it's not goint to return new object to mutate to orginal object
}

book = publish(book);

console.log(book.toJS());

//mutable and Immutable

//mutable means change existet data

//Primitives are Immutable
let str = "Hello";
// str[0] = 'C'; ==> error: Cannot assign to read only property '0' of string 'Hello
// console.log(str);

str =  'Cello' // it's not mutate the mutable variable it's reasign 
// Reassingment and Mutable is not he same thing

//Structures contain mutable data Yapilar arr[] object{} 

const albhabet = ['a', 'b' , 'c' ,'d'];

albhabet[0] = 'x'; //This is mutation of mutable data

// console.log(albhabet);



const addToScoreHistory = (array, score) => { //Pure function don't mutate the given data
                                              //React want pure function beacuse If add item like this setState not gonna understand if state change
    return [...array,score];
    // return array.push(score);
}

// const scoreArray = [10, 20, 40, 50];
// const newScoreArray = addToScoreHistory(scoreArray, 500);
// console.log(scoreArray);
// console.log(newScoreArray);
//Orginal array was mutate
//const don't makes array immutables

//Creating Shallow Copies

// const numbers = [1, 2, 3, ,4 ,5];

// // ...spread opeator
// const spreadCopy = [numbers];
// console.log(spreadCopy === numbers); //false

// // Object.assign()
// const objectAsgArr = Object.assign([],numbers);

// console.log(objectAsgArr === numbers); //false


//Note //mixxxx my brain dude

// const arr = [1, 2, 3, 4];
// const arrX = [...arr,[5, 6]];

// const arrY = [...arrX];

// arrY[4][0] = 500;
// console.log(arrX);
// console.log(arrY);

//nested structual data still share reference

//Note that Array.from() and Array.slice() also craete shallow copies of arr


//Object.free
const scoreObj = {
    'first' : 44,
    'second': 12,
    'third': {'a': 1, 'b': 3}
}

// Object on which to lock the attributes.
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
Object.freeze(scoreObj);
// scoreObj.first = 23; // gives a error
scoreObj.third.a = 31; //but here I can still change to value //It can be good for whic object has not reference type value

//With deep copy we can avoid this;

// Vanila JS way deep copy

const vJSdeepCopy = JSON.parse(JSON.stringify(scoreObj)); //even reference value not change orginal element beacuse it's deep copy
vJSdeepCopy.third.a = 5000;


console.log(scoreObj);
console.log(vJSdeepCopy);


//Vanilla JavaScirpt DeepCopy function

const deepCopy = (obj) => {
    if((typeof obj !== 'object') || obj === null) return obj;

    //create array or object
    const newObject  = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        const value = obj[key];

        newObject[key] = deepCopy(value);
    }

    return newObject;
}

const obj = {name: 'Jaykip', addres:{country: 'USA', city:'Mexico'}};

const deepCopyObj = deepCopy(obj);

console.log( obj === deepCopyObj ); // === false
console.log(deepCopyObj);





