let a = Array(10);

for(let i = 0; i < a.length; i++)
{
    a[i] = Math.floor(Math.random() * 100);
}

console.log("Your array: \r\n");
console.log(a);

let sum = 0;

for(let i = 0; i < a.length; i++)
{
    sum += a[i];
}

console.log("Sum of the array is: " + sum);