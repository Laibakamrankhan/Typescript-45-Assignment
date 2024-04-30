/*Pizzas: Think of at least three kinds of your favorite pizza.
 Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let pizza = ["Margherita" , "Pepperoni" , "Hawaiian"] 
for(let i = 0; i < pizza.length; i++){
    console.log(pizza[i]);  
}
for(let i = 0; i < pizza.length; i++){
    if(pizza[i] == "Margherita"){
        console.log(`${pizza[i]} Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.
        `);
    
    
    }else if(pizza[i] == "Pepperoni"){
        console.log(`${pizza[i]} Pizza topped with slices of pepperoni, a type of spicy salami, and cheese.
        `);
    
    
    }else if(pizza[i] == "Hawaiian"){
        console.log(`${pizza[i]} Pizza topped with ham and pineapple, offering a sweet and savory flavor combination.
        `);
    
    
    }



}
