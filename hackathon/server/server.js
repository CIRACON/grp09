const express = require('express');
const app = express();
app.use(express());
app.get('/', (req, res) => res.send('The server is running:)'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));