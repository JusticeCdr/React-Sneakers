import React from "react";

const Buy = ({ toggle, setToggle }) => {
  return (
    <>
      <div className="by__bg" onClick={() => setToggle(false)}></div>
      <div className="by__container">
        <h2 className="by__title">Корзина</h2>

        <div className="by__tax">
          <div className="by__price">
            <p>Итого: </p>
            <span>21 498 руб. </span>
          </div>
          <div className="by__tax-text">
            <p>Налог 5%: </p>
            <span>1074 руб. </span>
          </div>
          <button onClick={() => setToggle(false)} className="btn">
            Оформить заказ
            <img className="arrow" src="./img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Buy;
