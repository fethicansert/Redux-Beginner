function sayHello(){
    return () => 'HELLO HELL'
}

const fn = sayHello; //If I put parantezies I call to function just name it's means assigne to reference

const greet = (hellFunction) => console.log(hellFunction());

greet(sayHello);