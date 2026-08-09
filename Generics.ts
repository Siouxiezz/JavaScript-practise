const gameScores = [14, 21, 30, 18, 25];
const favouriteThings = ['Pizza', 'Ice Cream', 'Chocolate', 'Sushi', 'Games'];
const voters = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 }];

function getLastItem<Type>(array: Type[]): Type | undefined
{
    return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));