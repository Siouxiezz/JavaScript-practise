"use strict";
let cashInRegister = 100;
let nexOrderID = 1;
let nextPizzaID = 1;
const menu = [
    { id: nextPizzaID++, name: "Margarita", price: 10 },
    { id: nextPizzaID++, name: "Pepperoni", price: 5 },
    { id: nextPizzaID++, name: "Hawaiian", price: 9 },
    { id: nextPizzaID++, name: "Four cheese", price: 12 }
];
function displayMenu() {
    const menuElement = document.getElementById("menu");
    menu.forEach(pizzaObj => {
        const pizzaElement = document.createElement("div");
        const pizzaInfo = document.createElement("span");
        const orderButton = document.createElement("button");
        pizzaInfo.textContent = `${pizzaObj.name} - ${pizzaObj.price}$`;
        orderButton.textContent = "Order";
        orderButton.addEventListener("click", () => {
            const order = placeOrder(pizzaObj.name);
            if (order) {
                displayOrders();
                console.log(`Order placed: ${order.pizza.name} - ${order.pizza.price}$`);
            }
        });
        pizzaElement.appendChild(pizzaInfo);
        pizzaElement.appendChild(orderButton);
        menuElement?.appendChild(pizzaElement);
    });
}
displayMenu();
function displayOrders() {
    const orderElement = document.getElementById("order");
    if (orderElement) {
        orderElement.innerHTML = "";
    }
    orderQueue.forEach(order => {
        const orderInfo = document.createElement("div");
        orderInfo.textContent = `Order ID: ${order.id}, Pizza: ${order.pizza.name}, Status: ${order.status}`;
        orderElement?.appendChild(orderInfo);
    });
}
const orderQueue = [];
function addNewPizza(pizzaObj) {
    const newPizza = {
        id: nextPizzaID++,
        name: pizzaObj.name,
        price: pizzaObj.price
    };
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in menu`);
        return;
    }
    const newOrder = { id: nexOrderID++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price;
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the order queue`);
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        const pizzaDetail = menu.find(pizzaObj => pizzaObj.name.toLocaleLowerCase() === identifier.toLowerCase());
        return pizzaDetail;
    }
    else if (typeof identifier === "number") {
        const pizzaDetail = menu.find(pizzaObj => pizzaObj.id === identifier);
        return pizzaDetail;
    }
    else {
        console.error("Parameter `identifier` must be either a string or a number");
    }
}
addNewPizza({ name: "Chicken BBQ", price: 15 });
addNewPizza({ name: "Spicy Sausage", price: 6 });
addNewPizza({ name: "Burata Sausage", price: 11 });
addNewPizza({ name: "Chicken Ranch", price: 13 });
placeOrder("Chicken BBQ");
placeOrder("Pepperoni");
completeOrder(1);
placeOrder("Four cheese");
placeOrder("Chicken BBQ");
completeOrder(2);
console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
//# sourceMappingURL=pizza%20app%202.0.js.map