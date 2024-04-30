//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start wit your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ["Sara", "Samen", "Ayesha", "Mahbeena", "Urooj", "Fatima", "Mahnoor", "Maria"];
console.log("Unfortunatly! The new dinner table has not arrange so we can invite only two guest");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, See You Next Time.`);
    }
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, See you at dinner on Saturday`);
});
guestList.splice(0, guestList.length);
console.log("Updated List of Guest:", guestList);
export {};
