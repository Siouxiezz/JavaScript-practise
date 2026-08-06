function printArray(arr, callback)
{
    callback(arr);
}

function show(arr)
{
    console.log("Callback function is used: \r\n");
    console.log(arr);
}

let array1 = Array(10);

for(let i = 0; i < array1.length; i++)
{
    array1[i] = Math.floor(Math.random() * 100);
}

console.log("Your unsorted array: \r\n");
console.log(array1);

let array2 = array1.filter(value => value % 2 === 0);

console.log("Array after sorting: \r\n");
console.log(array2);

printArray(array2, show);