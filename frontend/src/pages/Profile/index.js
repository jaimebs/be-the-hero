import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { formatForCurrency } from '../../utils/formatNumbers';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [incidents, SetIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function getIncidents() {
    try {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      });
      SetIncidents(response.data);
    } catch (error) {
      alert(`Falha ao carregar os caso, tente novamente!`);
    }
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      // Atualiza o array assim que deleta o caso (incident).
      SetIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert(`Falha ao deletar o caso, tente novamente!`);
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    getIncidents();
  }, []);

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>
          Bem vinda, <strong>{ongName}</strong>
        </span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower style={{ width: 18 }} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR</strong>
            <p>{formatForCurrency(incident.value)}</p>
            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 style={{ width: 20 }} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
