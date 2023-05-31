
import '../pages/cadastro.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import ButtonCadastro from "../componentes/Button/ButtonCadastro";

function Cadastro() {

  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  function handleCodigoChange(event) {
    setCodigo(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleSobrenomeChange(event) {
    setSobrenome(event.target.value);
  }
  function handleDatanascimentoChange(event) {
    setDatanascimento(event.target.value);
  }
  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  function handleCidadeChange(event) {
    setCidade(event.target.value);
  }
  function handleEstadoChange(event) {
    setEstado(event.target.value);
  }
  function handleClick(){
    alert ("Parabéns, plano assinado com sucesso!")
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
            <label htmlFor="nameInput">Código:</label><br />
            <input class="form-control" placeholder="Código" id="codigoInput" type="number" value={codigo} onChange={handleCodigoChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Nome:</label><br />
            <input class="form-control" placeholder="Nome" id="nameInput" type="text" value={name} onChange={handleNameChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Sobrenome:</label><br />
            <input class="form-control" placeholder="Sobrenome" id="sobrenomeInput" type="text" value={sobrenome} onChange={handleSobrenomeChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Data de Nascimento:</label><br />
            <input class="form-control" placeholder="datanascimento" id="datanascimentoInput" type="number" value={datanascimento} onChange={handleDatanascimentoChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Telefone:</label><br />
            <input class="form-control" placeholder="Telefone" id="telefoneInput" type="number" value={telefone} onChange={handleTelefoneChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Endereço:</label><br />
            <input class="form-control" placeholder="Endereço" id="enderecoInput" type="text" value={endereco} onChange={handleEnderecoChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Cidade:</label><br />
            <input class="form-control" placeholder="Cidade" id="cidadeInput" type="text" value={cidade} onChange={handleCidadeChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Estado:</label><br />
            <input class="form-control" placeholder="Estado" id="estadoInput" type="text" value={estado} onChange={handleEstadoChange} /> <br />
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