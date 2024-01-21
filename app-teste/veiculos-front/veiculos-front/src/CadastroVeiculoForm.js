// CadastroVeiculoForm.js

import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';

const CadastroVeiculoForm = ({ onVeiculoSubmit }) => {
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    anoFabricacao: '',
  });

  const handleChange = (e) => {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chame a função onVeiculoSubmit para atualizar o estado local do componente pai
    onVeiculoSubmit(veiculo);

    // Realize a requisição de cadastro para o endpoint adequado
    axios.post('http://localhost:4000/veiculos', {
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      anoFabricacao: veiculo.anoFabricacao,
    })
      .then(response => {
        console.log('Veículo cadastrado com sucesso:', response.data);
        // Lógica adicional após o cadastro, se necessário
      })
      .catch(error => {
        console.error('Erro ao cadastrar veículo:', error);
        // Lógica adicional em caso de erro
      });

    // Limpe os campos do formulário após o cadastro
    setVeiculo({
      marca: '',
      modelo: '',
      anoFabricacao: '',
    });
  };

  return (
    <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Cadastro de Veículo
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Marca"
              name="marca"
              variant="outlined"
              required
              value={veiculo.marca}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Modelo"
              name="modelo"
              variant="outlined"
              required
              value={veiculo.modelo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Ano de Fabricação"
              name="anoFabricacao"
              variant="outlined"
              type="number"
              required
              value={veiculo.anoFabricacao}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Cadastrar Veículo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CadastroVeiculoForm;
