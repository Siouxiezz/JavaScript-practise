let numb1 = +prompt("Enter your first number");
let numb2 = +prompt("Enter your second number");
let numb3 = +prompt("Enter your third number");

if(numb1 > numb2 && numb1 > numb3)
{
    alert("Your number " + numb1 + " is the highest number");
}else if(numb2 > numb1 && numb2 > numb3)
{
    alert("Your number " + numb2 + " is the highest number");
}else 
{
    alert("Your number " + numb3 + " is the highest number");
}