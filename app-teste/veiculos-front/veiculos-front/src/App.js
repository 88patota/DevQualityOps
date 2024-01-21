// App.js

import React, { useState } from 'react';
import CadastroVeiculoForm from './CadastroVeiculoForm';
import ListaVeiculos from './ListaVeiculos'; // Certifique-se de ter um componente ListaVeiculos

const App = () => {
  // Estado para armazenar a lista de veículos
  const [veiculos, setVeiculos] = useState([]);

  // Função para manipular o envio de veículos
  const handleVeiculoSubmit = (veiculo) => {
    // Atualiza o estado para incluir o novo veículo
    setVeiculos([...veiculos, veiculo]);

    // Adicione aqui qualquer lógica adicional que você deseje executar após o envio do veículo
    console.log('Veículo submetido:', veiculo);
  };

  return (
    <div>
      {/* Renderiza o formulário de cadastro de veículos */}
      <CadastroVeiculoForm onVeiculoSubmit={handleVeiculoSubmit} />

      {/* Renderiza a lista de veículos */}
      <ListaVeiculos veiculos={veiculos} />
    </div>
  );
};

export default App;
