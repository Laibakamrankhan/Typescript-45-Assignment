/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
show_magicians(magician);
function make_great(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " The Great";
    }
}
const Magicians2 = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
make_great(Magicians2);
show_magicians(Magicians2);
export {};
