const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'erikpatekoski',
  host: 'postgres-db',
  database: 'veiculos',
  password: '102030',
  port: 5432,
});

// Endpoint para obter todos os veículos do banco de dados
app.get('/veiculos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM veiculos');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter veículos do banco de dados', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Endpoint para obter um veículo específico por ID
app.get('/veiculos/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query('SELECT * FROM veiculos WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Veículo não encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Erro ao obter veículo do banco de dados', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Endpoint para criar um novo veículo no banco de dados
app.post('/veiculos', async (req, res) => {
  const { marca, modelo, anoFabricacao } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO veiculos(marca, modelo, ano_fabricacao) VALUES($1, $2, $3) RETURNING *',
      [marca, modelo, anoFabricacao]
    );

    const novoVeiculo = result.rows[0];
    res.status(201).json(novoVeiculo);
  } catch (error) {
    console.error('Erro ao criar novo veículo no banco de dados', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Endpoint para atualizar um veículo por ID
app.put('/veiculos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { marca, modelo, anoFabricacao } = req.body;

  try {
    const result = await pool.query(
      'UPDATE veiculos SET marca = $1, modelo = $2, ano_fabricacao = $3 WHERE id = $4 RETURNING *',
      [marca, modelo, anoFabricacao, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Veículo não encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Erro ao atualizar veículo no banco de dados', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Endpoint para excluir um veículo por ID
app.delete('/veiculos/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query('DELETE FROM veiculos WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Veículo não encontrado' });
    } else {
      res.json({ message: 'Veículo excluído com sucesso' });
    }
  } catch (error) {
    console.error('Erro ao excluir veículo do banco de dados', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
