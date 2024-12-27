// Task: FizzBuzz (Event Alert System)
//  Description: Develop a program to assign teams based on event number: Divisible by 3 ('Handled
//  by Team A'), divisible by 5 ('Handled by Team B'), divisible by both ('Handled by Special Team'),
//  otherwise 'No team assigned'.
//  Input Example: event_number = 30
//  Expected Output: Handled by Special Team

var x=Number.parseInt(prompt("Event_Number ="));
if(x%3==0 && x%5==0){
    console.log("Handled by Special Team");
}else if(x%3==0){
    console.log("Handled by Team A");
}else if(x%5==0){
    console.log("Handled by Team B");
}else{
    console.log('No team assigned');
}
