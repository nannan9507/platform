const wechat = require('../utils/wechat.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { env: process.env.NODE_ENV })
  })

  app.get('/wxsign', (req, res) => {
    wechat.wxsign(req);
  })
}