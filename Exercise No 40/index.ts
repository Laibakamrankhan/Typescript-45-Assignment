/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album. */
 function make_album(albumTittle: string   , artisrtName: string): void {
    console.log(`"${albumTittle}" by "${artisrtName}".`);
}
make_album("Tera Woh Pyar" ,"Momina Mustehsan and Asim Azhar")
make_album("Wohi Khuda Hai","Atif Aslam")
make_album("Afreen Afreen","Rahat Fateh Ali Khan and Momina Mustehsan")
function make_album2(albumTittle: string   , artisrtName: string , numberOfTrack: string ): void {
    console.log(`"${albumTittle}" by "${artisrtName}" Vol${numberOfTrack}.`);
}
make_album2("Tera Woh Pyar" ,"Momina Mustehsan and Asim Azhar" , "9")
make_album2("Wohi Khuda Hai","Atif Aslam" , "12")
make_album2("Afreen Afreen","Rahat Fateh Ali Khan and Momina Mustehsan" , "10")
