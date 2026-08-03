function addition(numb1, numb2)
{
    return numb1 + numb2;
}

function subtraction(numb1, numb2)
{
    return numb1 - numb2;
}

function multiplication(numb1, numb2)
{
    return numb1 * numb2;
}

function division(numb1, numb2)
{
    return numb1 / numb2;
}

let numb1 = +prompt("Enter first number: ");
let numb2 = +prompt("Enter second number: ");

let choice = 0;

while(choice != 5)
{
    let choice = +prompt("Enter the action you want to perform ( 1 - +, 2 - -, 3 - *, 4 - /, 5 - Exit)");

    switch(choice)
    {
        case 1: alert("Result: " + addition(numb1, numb2)); break;
        case 2: alert("Result: " + subtraction(numb1, numb2)); break;
        case 3: alert("Result: " + multiplication(numb1, numb2)); break;
        case 4: alert("Result: " + division(numb1, numb2)); break;
        case 5: alert("Goodbye!"); break;
        default: alert("Enter correct operation!");
    }
}