function createProduct(name: string, price: number)
{
    return {
        name,
        price,
        quantity: 0,
        calculateTotalPrice()
        {
            return this.price * this.quantity;
        }
    }
}

let products = [
    createProduct("SSD Kingston 1TB ", 7699),
    createProduct("SSD Samsung 2TB", 16799),
    createProduct("RAM Kingston Fury 16GB", 15279),
    createProduct("Keyboard AULA F75", 2399),
    createProduct("Motherboard Asus TUF Gaming", 10199),
    createProduct("Power supply MSI", 3199),
    createProduct("Case MSI", 2499),
    createProduct("Blue pen", 15),
    createProduct("CPU AMD Ryzen", 16999)
];

let cart = [];

// for(let i = 0; i < products.length; i++)
// {
//     const name = products.name[i];
//     const price = products.price[i];
//     products[i].ordered = +prompt(`Enter quantity of products '${name}', price '${price}'`)
// }

//додавання товарів
let ordered;

for(let i = 0; i < products.length; i++)
{
    const name = products[i].name;
    const price = products[i].price;
    const ordered = confirm(`Do you want to add '${name}', with the price '${price}', to your cart?`);

    if(ordered)
    {
        products[i].quantity = +prompt("Enter quantity of this item.");
        if(products[i].quantity === null)
        {
            console.error("You must write the quantity")
        }
        cart.push(products[i]);
    }
  
}

console.log(cart);

//видалення товарів
let result = confirm("Do you want to delete some items from your cart?");

if(result)
{
    const deletedName = prompt("Enter name of the item you want to delete");
    let index = cart.findIndex(product => product.name === deletedName);

    if(index !== -1)
    {
        cart.splice(index, 1);
        alert("The item was deleted from your cart.");
    }
    else
    {
        alert("That product does not exist.");
    }
}

//Підрахунок суми
let totalCost = 0;

for(let i = 0; i < cart.length; i++)
{
    totalCost += cart[i].calculateTotalPrice();
}

alert(`Total cost of your order '${totalCost}'. `);

//сортування за ціною

let sortResult = confirm("Do you want to filter your cart by price?")

if(sortResult)
{
    let currentFilterPrice = +prompt("Enter cost to filter the items (Only products with a price equal to or higher than this value will be shown.)");
    let filteredCart = cart.filter(item => item.price >= currentFilterPrice);
    alert("Products were filtered successfully.");
    for(let i = 0; i < filteredCart.length; i++)
    {
        console.log("Name of the product: " + filteredCart[i].name + ", price: " + filteredCart[i].price + " hryvnias, " + "quantity: " + filteredCart[i].quantity + " items");
    }
}

console.log("---------------------------------------------------------------")

//Вивід в консоль
for(let i = 0; i < cart.length; i++)
{
    console.log("Name of the product: " + cart[i].name + ", price: " + cart[i].price + " hryvnias");
}