import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Luc extends Component {
  render() {
    const Button = () => {
      return <button>Comprar</button>;
    };

    const Primeiro = () => {
      return <h1>Lista de compas</h1>;
    };

    return (
      <div>
        <Primeiro />
        Pizza
        <Button />
        <div>
          Cerveja
          <Button />
        </div>
      </div>
    );
  }
}
