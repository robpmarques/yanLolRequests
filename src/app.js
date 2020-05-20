const cors = require('cors');
const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.disable('x-powered-by');
  }

  routes() {
    this.server.use(routes);
  };
}

module.exports = new App().server;