// Task: Even or Odd Checker (Electricity Billing System)
// Description: Determine if a given meter reading (in kWh) is even or odd. If the reading is even,
// suggest a discount code 'EVENPOWER10'. If it's odd, suggest 'ODDSAVER5'.
// Input Example: meter_reading = 452
// Expected Output: Even reading, use discount code: EVENPOWER10


var x=Number.parseInt(prompt("Meter_Reading = "));
if(x%2==0){
    console.log(" Even reading, use discount code: EVENPOWER10");
}else{
    console.log(" Odd reading, use discount code: ODDSAVER5");
}