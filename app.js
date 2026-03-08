const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>TestApp - Working!</h1>');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TestApp running on port ${PORT}`);
});
