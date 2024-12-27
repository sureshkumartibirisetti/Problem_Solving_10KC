// Task: ATM Withdrawal Validator
// Description: Simulate an ATM withdrawal. Prompt for account balance and withdrawal amount. If the
// withdrawal amount exceeds balance, show 'Insufficient funds!'; otherwise, deduct and show
// 'Transaction successful!'.
// Input Example: balance = 2000, withdrawal = 2500
// Expected Output: Insufficient funds!

var bal=Number.parseInt(prompt());
var withDrawel=Number.parseInt(prompt());
if(bal<withDrawel){
    console.log(" Insufficient funds!");
}else{
    console.log( 'Transaction successful!');
}