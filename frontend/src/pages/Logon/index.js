import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
