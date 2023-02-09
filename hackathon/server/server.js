const express = require('express');
const data = require("./data");
const app = express();

app.use(express.json());

// findAllEmployees
app.get("/people", (req, res) => {
    data.call('findallemployees', {}, (result) => {
        if (result.employees !== undefined) {
            res.send(result.employees);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

    const port = 5000;
    console.log("server starting on port: " + port);
    app.listen(port);