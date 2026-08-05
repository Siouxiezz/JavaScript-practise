function sumOfArray(array)
{
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum;
}

let array = Array(10)

for(let i = 0; i < array.length; i++)
{
    array[i] = Math.floor(Math.random() * 100);
}

console.log("Your array: \r\n");
console.log(array);

console.log("Sum of array = " + sumOfArray(array));