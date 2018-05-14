const express = require('express');

const configureRoutes = require("../core/routes");

const app = express();
const port = process.env.SERVER_PORT || 5000;


configureRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));