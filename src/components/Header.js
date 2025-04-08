import React, { useState } from "react";
import { LuShoppingBasket } from "react-icons/lu";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="sum">Sum: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = (props) => {
  return (
    <div className="empty">
      <h2>There are no products</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Aboout us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <LuShoppingBasket
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
