import React, { useState } from "react";
import Carts from "./Carts";
import "./style.css";

const Sneakers = () => {
  const [carts, setCart] = useState(1);
  const [like, setLike] = useState(1);

  return (
    <section className="sneakers__container container">
      <h2 className="sneakers__title">Все кроссовки</h2>
      <div className="sneakers__carts">
        {Carts.map((cart) => (
          <div className="sneakers__cart">
            <div className="heart">
              <img onClick={() => setLike(0)} className={like === 1 ? 'cart__like active' : 'cart__like'} src="./img/unliked.svg" alt="" />
              <img onClick={() => setLike(1)} className={like === 1 ? 'cart__like' : 'cart__like active'} src="./img/liked.svg" alt="" />
            </div>
            <img width={133} height={112} src={cart.img} alt="" />

            <h3 className="sneakers__cart-title">{cart.title}</h3>

            <div className="sneakers__cart-number">
              <div className="sneakers__cart-sale">
                <span className="snekars__cart-price">Цена:</span>
                <p className="sneakers__cart-rub">{cart.price}</p>
              </div>

              <div className="sneakers__cart-plus">
                <img
                  onClick={() => setCart(1)}
                  className={carts === 1 ? "cart__plus" : "cart__plus active"}
                  src="./img/btn-checked.svg"
                  alt=""
                />
                <img
                  onClick={() => setCart(2)}
                  className={
                    carts === 2 ? "cart__checked" : "cart__checed active"
                  }
                  src="./img/btn-plus.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sneakers;
