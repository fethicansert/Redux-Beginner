import { produce } from "immer";

//produce function takes two argument base state and recipe function which use draft (taslak) as a parameter
//mutation only applies the drafy __copy__ of the given base state

let book = { title: "Harry Potter" };

function publish(book){
    const draft = produce(book, (draftBook) => {
        draftBook.isPublished = true;
    });

    return draft;
}

const x = publish(book);

console.log(book);
console.log(x);