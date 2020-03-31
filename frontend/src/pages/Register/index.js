import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" /> Voltar
          </Link>
        </section>
        <form>
          <input name="ong" placeholder="Nome da ONG" />
          <input name="email" type="email" placeholder="Email" />
          <input name="whatsapp" placeholder="Whatsapp" />

          <div className="input-group">
            <input name="cidade" placeholder="Cidade" />
            <input name="uf" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
