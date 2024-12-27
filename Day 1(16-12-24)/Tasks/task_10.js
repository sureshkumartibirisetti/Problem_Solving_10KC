// Task: Movie Ticket Price Calculator (Dynamic Pricing System)
// Description: Assign ticket prices based on age: Age < 12 ($5), 12-60 ($10), > 60 ($7).
// Input Example: age = 65
// Expected Output: Ticket price: $7

var x=Number.parseInt(prompt("age = "))
if(0<x && 12>x){
    console.log(" Ticket price: $ 5");
}
else if(12<=x && 60>=x){
    console.log(" Ticket price: $ 10");
}else{
    console.log("Ticket price: $ 7")
}