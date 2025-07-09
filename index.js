const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/webhooks/v1/orders', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.sendStatus(200); // responde OK
});

const PORT = 3091;
app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
