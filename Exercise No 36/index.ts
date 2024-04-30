/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. 
Call the function.*/
function makeShirt(size: string , message: string): void {
    console.log(`Making a ${size} t-shirt with the message"${message}" print on it.`);
}
makeShirt("small" , "I love My MoM")
makeShirt("medium","I love My Dad")
makeShirt("large" , "I love My Cat")