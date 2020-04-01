import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function Incident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {
      alert(`Falha ao cadastrar novo caso, tente novamente!`);
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input name="titulo" placeholder="Titulo" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input name="valor" placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
