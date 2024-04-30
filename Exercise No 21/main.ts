//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item {
    name:string
    price:number
}
const book : item = {
    name: "Haalim",
    price: 1650
}
const myBook : item = {
    name: "Namal",
    price: 2000
}
console.log(`Book Name: ${book.name} , Price:${book.price}`);
console.log(`Book Name: ${myBook.name} , Price:${myBook.price}`);

