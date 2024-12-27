// Task: Speed Limit Checker (Traffic Monitoring System)
// Description: Check vehicle speed and respond: Speed < 60 ('Normal Speed'), 60-80 ('Warning:
// Close to Overspeeding'), > 80 ('Overspeeding! Penalty applied').
// Input Example: speed = 75
// Expected Output: Warning: Close to Overspeeding

var x=Number.parseInt(prompt("Speed = "));
if(x>0 && 60>x){
    console.log("Normal Speed");
}else if(60<=x && 80>=x){
    console.log("'Warning: Close to Overspeeding");
}else{
    console.log('Overspeeding! Penalty applied');
}