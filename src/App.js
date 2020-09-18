import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Livro from "./components/livros/livro";
import Filme from "./components/filmes/filme";
import Luc from "./components/lucAlencar/index";
import Footer from "./components/Footer/index";
import Frase from "./components/Frase/index";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Livro />
      <Filme />
      <Luc />
      <Frase />
      <Footer />
    </div>
  );
}
