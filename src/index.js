const input  = " JavaScriprt ";
const output = `<div>${input.trim()}</div>`
console.log(output);


const trim = text => text.trim();
const divWrap = input => `<div>${input}</div>`
const toLowerCase = text => text.toLowerCase();
const res = divWrap(trim(toLowerCase(input)));
//Proplems wtih this function compostion is we read right to legt and to much parantezies
console.log(res);