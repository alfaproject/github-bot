const express = require('express');
const router = express.Router();

let log = [];

router.post('/', function (req, res) {
  const data = req.body;
  let [skin] = data.app.split('-staging');

  // Sanitize
  if (skin === 'cresus') {
    skin = 'cresuscasino';
  }

  Bot.websocket.emit('screenshot:create', { branch: 'master', skin, domain: data.url });

  res.json({ status: 'Up and running ' });
});

router.get('/log', function (req, res) {
  res.json({ log });
});

module.exports = router;
