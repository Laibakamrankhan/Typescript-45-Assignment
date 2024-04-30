//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName : string = "laiba Kamran"
console.log("Lowercase:",personName.toLocaleLowerCase())
console.log("Uppercase:",personName.toLocaleUpperCase())
console.log("TitleCase:",personName.replace(/\b\w/g,c=>c.toLocaleUpperCase()))
