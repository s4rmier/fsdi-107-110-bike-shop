import DataContext from "./dataContext";
import { useState } from "react";

export default function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    username: "rom",
    userID: "1121",
    email: "rom@sdgku.com",
  });

  function addToCart(prod) {
    let cartCopy = [...cart];
    cartCopy.push(prod);
    setCart(cartCopy);
  }

  function removeFromCart() {
    console.log("Removed from global");
  }

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
