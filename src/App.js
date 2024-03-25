import React from "react";
import Header from "./components/Header/Header";
import Sneakers from "./components/Sneakers/Sneakers";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="body__container">
        <Sneakers />
      </main>
    </>
  );
};

export default App;
