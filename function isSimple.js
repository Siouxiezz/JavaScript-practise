function isSimpleNumber(number)
{
    if(number <= 1)
    {
        alert("Your number must be greater than 1.");
        return;
    }

    for(let i = 2; i * i <= number; i++)
    {
        if(number % i === 0)
        {
            return false;
        }
    }

    return true;
}

let number = +prompt("Enter the number you want to check.");

alert("Is your number prime: " + isSimpleNumber(number));