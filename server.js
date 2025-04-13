const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'Pergunta não enviada.' });

  try {
    console.log("Pergunta recebida:", question);
    const fakeResponse = `A resposta para "${question}" é: Isso depende do contexto!`;
    res.json({ answer: fakeResponse });
  } catch (error) {
    console.error('Erro ao simular IA:', error.message);
    res.status(500).json({ error: 'Erro ao simular IA.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} [modo simulado]`);
});