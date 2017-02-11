const wechat = require('../utils/wechat.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    if (wechat.wxCheck(req)) {
      res.render('index', { env: process.env.NODE_ENV });
    } else {
      res.render('not_wx_login');
    }
  })

  app.get('/wxsign', (req, res) => {
    wechat.wxsign(req, res);
  })
}