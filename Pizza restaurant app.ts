type Pizza = 
{
    id: number,
    name: string,
    price: number
}

type Order = 
{
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let cashInRegister = 100;
let nexOrderID = 1;
let nextPizzaID = 5;

const menu: Pizza[] = 
[
    { id: nextPizzaID++, name: "Margarita", price: 10},
    { id: nextPizzaID++, name: "Pepperoni", price: 5},
    { id: nextPizzaID++, name: "Hawaiian", price: 9},
    { id: nextPizzaID++, name: "Four cheese", price: 12}
]

const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza
{
    const newPizza: Pizza = 
    {
        id: nextPizzaID++,
        name: pizzaObj.name,
        price: pizzaObj.price
    }
    menu.push(newPizza);
    return newPizza;
}

    addNewPizza({ name: "Chicken BBQ", price: 15});
    addNewPizza({ name: "Spicy Sausage", price: 6});
    addNewPizza({ name: "Burata Sausage", price: 11});
    addNewPizza({ name: "Chicken Ranch", price: 13}); 

function placeOrder(pizzaName: string): Order | undefined
{
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza)
    {
        console.error(`${pizzaName} does not exist in menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {id: nexOrderID++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined
{
    const order = orderQueue.find(order => order.id === order.id);
    if(!order)
    {
        console.error(`${orderId} was not found in the order queue`);
        return;
    }
        order.status = "completed";
    return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined
{
    if(typeof identifier === "string")
    {
        const pizzaDetail = menu.find(pizzaObj => pizzaObj.name.toLocaleLowerCase() === identifier.toLowerCase());
        return pizzaDetail;
    }
    else if(typeof identifier === "number")
        {
            const pizzaDetail = menu.find(pizzaObj => pizzaObj.id === identifier);
            return pizzaDetail;
        }
        else
            {
                console.error("Parameter `identifier` must be either a string or a number");
            }
        }
        

placeOrder("Chicken BBQ");
placeOrder("Pepperoni");
completeOrder(1);
placeOrder("Four cheese");
placeOrder("Chicken BB");
completeOrder(2);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);