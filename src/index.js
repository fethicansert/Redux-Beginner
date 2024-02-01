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


