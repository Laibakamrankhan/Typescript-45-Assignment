/*Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed?*/
let userName : string[] = ["Admin","Mahir","Sarbeena","Jannat","Faris"];
if (userName.length === 0){
    console.log("We need to find some users!");
    
}
else {
    userName =[];
    console.log("All User Have been removed" + userName.length);
    
}



