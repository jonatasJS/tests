const express = require('express');
const http = require('http');
const app = express();

app.use(express.static('public'));

app.get('/:number', (req, res) => res.json({
  link: `https://api.whatsapp.com/send?phone=${req.params.number}&text=O%20protocolo%20desse%20atendimento%20%C3%A9%20416305.%20Segue%20em%20anexo%20a%20fatura%2C%20por%20gentileza%2C%20verificar%20os%20dados%20antes%20de%20efetuar%20o%20pagamento.%20`,
}));

http.createServer(app).listen(3000);