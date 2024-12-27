// Task: Personalized Greeting System
//  Description: Based on the time of day, greet the user appropriately: Morning (6 AM-11:59 AM),
//  Afternoon (12 PM-5 PM), Evening (5 PM-9 PM), and Night (9 PM-6 AM).
//  Input Example: current_time = '2 PM'
//  Expected Output: Good Afternoon!

var x=prompt();
var arr=x.split(" ");
var arr2=arr[0].split(":");
var time=arr2[0]+'.'+arr2[1];
time=Number.parseFloat(time);
if(arr[1].toLowerCase()=='am'){
    if((time>=12 && 12.59>time) || (time>=1 && time<=6)){
        console.log("Good Night");
    }else if(time>6 && time<=11.59){
        console.log("Good Morning");
    }
}else{
    if((time>=9 && 11.59>time)){
        console.log("Good Night");
    }else if(time>=5 && time<9){
        console.log("Good Evening");
    }else{
        console.log("Good AfterNoon");
    }
}

