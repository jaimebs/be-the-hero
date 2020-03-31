import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function Incident() {
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um héroi para resolve isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" /> Voltar para home
          </Link>
        </section>
        <form>
          <input name="titulo" placeholder="Titulo" />
          <textarea name="descricao" placeholder="Descrição" />
          <input name="valor" placeholder="Valor em reais" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
