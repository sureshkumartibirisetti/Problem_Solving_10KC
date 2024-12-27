// Task: Grade Calculator (Performance Review)
// Description: Assign grades based on scores: 90+ ('A+'), 80-89 ('A'), 70-79 ('B'), 60-69 ('C'), < 60
// ('F').
// Input Example: score = 85
// Expected Output: Grade: A (Excellent)

var x=Number.parseInt(prompt("score = "));
if(x<=100 && x>=90){
    console.log("Grade: A+(Excellent)");
}else if(x<=89 && x>=80){
    console.log("Grade: A(Good)");
}else if(x<=79 && x>=70){
    console.log("Grade: B(Average)");
}else if(x<=69 && x>=60){
    console.log("Grade: C(Below Average)");
}else if(x>=0 && x<60){
    console.log("Grade: F(Fail)");
}