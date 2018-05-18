const express = require("express");
const configureExpress = require("./express");
const configureRoutes = require("../core/routes");
const configureDBSync = require("./sync-db");

const app = express();
const port = process.env.SERVER_PORT || 5000;

configureDBSync();
configureExpress(app);
configureRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
