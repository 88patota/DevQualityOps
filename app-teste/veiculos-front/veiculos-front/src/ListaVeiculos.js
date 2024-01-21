// ListaVeiculos.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaVeiculos = () => {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    // Função para buscar veículos do endpoint
    const buscarVeiculos = async () => {
      try {
        // Substitua a URL abaixo pelo seu endpoint real
        const response = await axios.get('http://localhost:4000/veiculos');
        setVeiculos(response.data);
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      }
    };

    // Chama a função para buscar veículos ao montar o componente
    buscarVeiculos();
  }, []); // O segundo argumento vazio significa que isso será executado apenas uma vez durante o montagem do componente

  return (
    <div>
      <h2>Lista de Veículos</h2>
      <ul>
        {veiculos.map((veiculo) => (
          <li key={veiculo.id}>
            <strong>Marca:</strong> {veiculo.marca}, {' '}
            <strong>Modelo:</strong> {veiculo.modelo}, {' '}
            <strong>Ano de Fabricação:</strong> {veiculo.ano_fabricacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVeiculos;
