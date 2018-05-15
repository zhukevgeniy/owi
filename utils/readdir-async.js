const fs = require("fs");

const readdir = path => {
  return fs.readdirSync(path)
};

module.exports = readdir;
