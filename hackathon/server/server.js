const express = require('express');
const data = require("./data");
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.send('The server is running:)'));

const port = 3000;
console.log("server starting on port: " + port );
app.listen(port);