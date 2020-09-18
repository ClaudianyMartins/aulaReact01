import React from "react";
import ReactDOM from "react-dom";
import Harry from "../../assets/imagens/harry_potter_1.jpg";

export default class Filme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      temSinopse: true,
      anoDeLancamento: " 23 de novembro de 2001 ",
      duracaoDoFilme: "2h 39m"
    };
  }

  render() {
    return (
      <div>
        <h1>O Filme de {this.state.titulo}</h1>
        <h1>o autor do livro é{this.state.autor}</h1>
        <h1>o ano de lançamento do filme foi: {this.state.anoDeLancamento}</h1>
        <h1>duração do filme e de {this.state.duracaoDoFilme}</h1>
        <img alt="harry potter" src={Harry} />
      </div>
    );
  }
}
