/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common.
  You could print a sentence such as Any of these animals would make a great pet!*/
let animals = ["Dog", "Cat", "Parrot"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "Dog") {
        console.log(`${animals[i]} A dog would make a great pet. .
        `);
    }
    else if (animals[i] == "Cat") {
        console.log(`${animals[i]} A Cat is a Fluffy pet. .
            `);
    }
    else if (animals[i] == "Parrot") {
        console.log(`${animals[i]} A Parrot is very friendly pet.
                `);
    }
}
console.log("They All Are Pet Animals");
export {};
