// Task: Shopping Discount Calculator (Festival Offer)
// Description: Calculate the price after applying discounts: Purchase > $1000 (20% discount),
//  $500-$1000 (10% discount), below $500 (no discount).
//  Input Example: purchase_amount = 1200
//  Expected Output: Discounted price: $960

var x=Number.parseInt(prompt(" purchase_amount = "));
if(x>1000){
    console.log(`Discount Price : $ ${x-(x*0.2)}`);
}else if(1000>=x && 500<=x){
    console.log(`Discount Price : $ ${x-(x*0.1)}`);
}else if(x>0 && x<500){
    console.log(`No Discount Price : $ ${x}`);
}