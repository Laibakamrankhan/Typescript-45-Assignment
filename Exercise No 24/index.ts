//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let car : string = "subaru"

console.log("Is Car == 'Sabaru' ? I Predict true");
console.log(car == 'Sabaru'); //Equality Comparison

console.log("Is Car !== 'Sabaru' ? I Predict false");
console.log(car !=='Sabaru'); //inequality comparison

console.log("Is Car.toLowerCase() == 'Sabaru' ? I Predict false");
console.log(car.toLowerCase() =='Sabaru'); //strict comparison

console.log("Is Car.toLowerCase() !== 'Sabaru' ? I Predict false");
console.log(car.toLowerCase() !=='Sabaru'); //strict comparison

let num1: number = 5
let num2 = 10
let coMp = num1 == num2
console.log(coMp)

let num3=5
let num4 = 10
let comP = num1 != num2
console.log(comP)

let num5=5
let num6 = 10
let cOmp = num1 > num2
console.log(cOmp)

let num7=5
let num8 = 10
let comp = num1 < num2
console.log(comp)

let age : number = 25
console.log("Is age > 20 && age < 30? I predict True");
console.log(age > 20 && age < 30);

console.log("Is age > 30 || age < 18 ? I predict false");
console.log(age > 30 || age < 18);


let count: number[] = [1 , 2 , 3 , 4 ,5]
console.log("Is 3 in count? i predict true");
console.log(3 in count);

console.log("Is 6 in count? i predict true");
console.log(6 in count);



