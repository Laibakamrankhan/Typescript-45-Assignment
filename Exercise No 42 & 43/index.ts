/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/
/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the 
Great added to each magician’s name. */ 
function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
        
    }
}
const magician: string[] = ["Harry Houdini","David Copperfield","Penn & Teller"]
show_magicians(magician)


function make_great(Magicians: string[]): void {
    for(let i = 0; i < Magicians.length; i++){
        Magicians[i] = Magicians[i] +  " The Great"
    }
}const Magicians2: string[] = ["Harry Houdini","David Copperfield","Penn & Teller"]
make_great(Magicians2)
show_magicians(Magicians2)