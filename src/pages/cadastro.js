
import '../pages/cadastro.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import ButtonCadastro from "../componentes/Button/ButtonCadastro";

function Cadastro() {

  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nomeCartao, setNomeCartaocvc] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numerocvc, setNumerocvc] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  function handleNomeCartaocvcChange(event) {
    setNomeCartaocvc(event.target.value);
  }
  function handleNumeroCartaoChange(event) {
    setNumeroCartao(event.target.value);
  }
  function handleNumerocvcChange(event) {
    setNumerocvc(event.target.value);
  }
  function handleClick(){
    alert ("Parabéns, plano assinado com sucesso!")
}


  function handleNumeroCartaoChange(event) {
    
    let numero = event.target.value.replace(/-/g, '');

    numero = numero.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');

    setNumeroCartao(numero);
  }


  const location = useLocation();
  const url = location.pathname; 


  return (

    <div className="container">
      <div className="mt-5 text-center">
        <h2> Dados do Assinante </h2>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div>
            <div className="mt-3">
              <label> Dados do Assinante </label>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Name:</label><br />
            <input class="form-control" placeholder="Nome Completo" id="nameInput" type="text" value={name} onChange={handleNameChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Telefone:</label><br />
            <input class="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={handleTelefoneChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Endereço:</label><br />
            <input class="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={handleEnderecoChange} /> <br />
          </div>
        </div>
        <div className="col">
          <div className="mt-3">
            <label> Dados do Cartão </label>
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Nome do Cartão:</label><br />
            <input class="form-control" placeholder="Nome do cartão do usuário" id="NomeCartaoInput" type="number" value={nomeCartao} onChange={handleNomeCartaocvcChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Número do Cartão:</label><br />
            <input className="form-control" placeholder="Número do cartão do usuário" id="NumeroCartaoInput" type="text" maxLength={19} value={numeroCartao} onChange={handleNumeroCartaoChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="NumerocvcInput">Número do CVC:</label><br />
            <input className="form-control" placeholder="Número do CVC" id="NumerocvcInput" type="password" maxLength={3} value={numerocvc} onChange={handleNumerocvcChange} /> <br />
          </div>
        </div>
      </div>
      <div>
        <div>
          < ButtonCadastro/>
        </div>
        <div className="mt-5 text-center">
            <button class="btn" onClick={handleClick}>Assinar</button>
        </div>
      </div>
    </div>



  );
}


export default Cadastro;