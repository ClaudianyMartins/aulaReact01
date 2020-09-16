import React from "react";
import ReactDOM from "react-dom";
import ".././livros/livro.css";

export default class Livro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "A menina que roubava livros",
      autor: "Stephanie",
      quantidadeDeFolhas: 231,
      temSinopse: true,
      anoLancamento: 9999,
      editora: "",
      escritor: "nao sei"
    };
  }

  obterEditora = (event) => {
    if (
      event.target.value !== "" &&
      event.target.value !== undefined &&
      event.target.value !== null
    ) {
      this.setState({ editora: event.target.value });
    }
  };

  meuClickDoBotao = (event) => {
    event.preventDefault();
    alert("editora: " + this.state.editora);
  };

  render() {
    return (
      <div>
        <h1>meu livro favorito é {this.state.titulo}</h1>
        <p>Informações sobre meu livro favorito</p>
        <p> autor: {this.state.autor}</p>
        <p> quantidade de folhas: {this.state.quantidadeDeFolhas}</p>
        <p> editora: {this.state.editora}</p>
        <form>
          <p> Informe a editora</p>
          <input type="text" onChange={this.obterEditora} />
          <input type="submit" onClick={this.meuClickDoBotao} />
        </form>
      </div>
    );
  }
}
