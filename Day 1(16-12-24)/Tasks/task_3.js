// Task: Divisibility Check (Offer Eligibility)
// Description: Check if an order number is divisible by 3, 5, or both: Divisible by 3 gives 'Free
// Shipping', divisible by 5 gives 'Cashback', and divisible by both gives 'Free Shipping and Cashback'.
// Input Example: order_number = 15
// Expected Output: Free Shipping and Cashback


var x=Number.parseInt(prompt("Order_number = "));
if(x%3==0 && x%5==0){
    console.log(" Free Shipping and Cashback");
}else if(x%3==0){
    console.log("Free Shipping");
}else{
    console.log("Cashback");
}