const request = require('request');
const server = require('../configs/server');

const _server = server.apiURL;
const base_url = _server.protocol + _server.host + _server.port;

const httpProxy = (method, url) => {
  request[method]()
}

module.exports = httpProxy;