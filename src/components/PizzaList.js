import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};
const selectPizzas = (reduxState) => {
  const pizzas = reduxState.pizzas;

  return pizzas.sort((pizzaA, pizzaB) => {
    return pizzaB.bought - pizzaA.bought;
  });
};
export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const pizzaList = pizzas.map((pizza) => {
    return (
      <div key={pizza.id}>
        <ul>
          <li>
            <p>Pizza: {pizza.name}</p>
            <p>Description: {pizza.description}</p>
            <p>Bought: {pizza.bought}</p>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      {pizzaList}
    </div>
  );
}
