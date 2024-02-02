import { compose, pipe } from 'lodash/fp'

const input  = " JavaScriprt ";
const result = `<div>${input.trim()}</div>`
// console.log(output);


// const trim = text => text.trim();
// const toLowerCase = text => text.toLowerCase();
// const wrap = (input) => `<div>${input}</div>`
//`<${type}>${input}</${type}>`

// const functionalResult = divWrap(toLowerCase(trim((input))));

// console.log(res);
//pipe and compse expect func ...
// const composeTransform = compose(trim, toLowerCase, wrap('span')); // ==> divWrap(toLowerCase(trim((input))));
                                                        //this function will give error compose(func) expect func
// const composeRestult =  composeTransform(input);
// console.log(composeRestult);

// const pipeTransform = pipe(trim, toLowerCase, wrap); // ==> divWrap(toLowerCase(trim((input))));
// const pipeRestult =  pipeTransform(input);
// console.log(pipeRestult);


//Currying

function add(a){
    return function(b){
        return a + b;
    }
};

// console.log(add); //will return function reference
// console.log(add()); // will call to add function and return function reference that inside the add function
// console.log(add()()); //will call to add function than return the add function than call the referenc fuction that return from add fumction

const addArrow = (a) => (b) => a + b;   //it's currying

console.log(addArrow(2)(4))

//Adding Currying Method to our wrap function make it more functional

//This is what I try to do *** down there

// const trim = (text) => text.trim();
// const toLowerCase = (text) => text.toLowerCase();
// const wrap = (input) => (type) => `<${type}>${input}</${type}>`;

// const curryPipeTransform = pipe(trim, toLowerCase, wrap);

// const curryResult = pipeTransform(input)('div')
// console.log(curryResult);

//You can think ass
// function wrap(input){
//     return function(type) {
//         return `<${type}>${input}</${type}>`;
//     }
// }


//How to properly do it
// const trim = (text) => text.trim();
// const toLowerCase = (text) => text.toLowerCase();
// const wrap = (type) => (input) => `<${type}>${input}</${type}>`;

// console.log(wrap);

// const pipeTransformWrap = pipe(trim, toLowerCase, wrap('div')); //pipe calls to reference // after wrap return a function i call them to

const trim = (text) => text.trim();
const toLowerCase = (text) => text.toLowerCase();
const wrap = (type) => (input) => `<${type}>${input}</${type}>`;




const pipeTransformWrap = pipe(trim, toLowerCase, wrap('div')); //pipe calls to reference // after wrap return a function i call them to

const x = (type,text) => {
    const pipeTransformWrap = pipe(trim, toLowerCase, wrap(type));
    return pipeTransformWrap(text);
}

console.log(x('div', 'text'));

const person = {
    name:'Ahmet',
    address: {
        country:"KKTC", 
        city:"Lefkosa"}, 
    age:25
}

const newPerson = {...person,name:'Hasan'}; //...spread operator yaymak //overwrite name //! address still shallow copy !
                                            //newPerson object it's deepcopy but address is shallowCopy 
newPerson.address.city = 'Girne'; //address is shallow copy there
newPerson.age = 45; //This not effect to orginal person object beacuse it's not hold a reference
console.log(person);
console.log(newPerson);

const newPerson_1 = {...person, //spread the person object now I can overwrite
                        name:"Jack",
                        address: { //deepCopying creating new objcet
                            ...person.address,
                               city: 'Mexico'     
                        }
                    }
console.log(newPerson_1);
//Shallow Copy stores the references of objects to the original memory address. 
//Deep copy stores copies of the object's value.

