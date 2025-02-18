const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Choose a port, different from your frontend (e.g., 3001)

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
}); 