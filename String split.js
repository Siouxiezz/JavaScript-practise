let string = prompt("Enter some text you want to split");

const words = string.split(" ");

for(let word of words)
{
    console.log(word);
}