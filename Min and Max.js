let a = Array(10);

for(let i = 0; i < a.length; i++)
{
    a[i] = Math.floor(Math.random() * 100);
}

let min = a[0];
let max = a[0];

console.log("Your array: \r\n");
console.log(a);

for(let i = 0; i < a.length; i++)
{
    if(a[i] < min)
    {
        min = a[i];
    }
    if(a[i] > max)
    {
        max = a[i];
    }
}

console.log("Min: " + min);
console.log("Max: " + max);