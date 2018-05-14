require("dotenv/config");
require("./config/initialize");
/*require("./config/mysql");
require("./config/passport");*/

process.on("uncaughtException", error => {
  throw new Error(error, "Uncaught exception");
});

process.on("unhandledRejection", up => {
  throw up;
});
