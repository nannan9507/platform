const crypto = require('crypto');

const wx_info = {
  token: 'nannan95'
}

function sha1(str) {
  var shasum = crypto.createHash("sha1");
  shasum.update(str);
  str = shasum.digest("hex");
  return str;
}

const wechat = {
  wxCheck: (req) => {
    const ua = req.headers['user-agent'].toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  },
  wxsign: (req, res) => {
    const echostr = req.query.echostr;
    const signature = req.query.signature;
    const timestamp = req.query.timestamp;
    const nonce = req.query.nonce;

    let tmpArr = [wx_info.token, timestamp, nonce];
    tmpArr.sort();

    let sortStr = tmpArr.join('');

    let sha1Str = sha1(sortStr);
    console.log(signature, sha1Str)

    if (signature === sha1Str) {
      res.end(echostr);
    } else {
      res.end('false');
    }
  }
}

module.exports = wechat;