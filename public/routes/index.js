const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.renderVue('main.vue', { message: 'Hello World' });
});

router.get('/test:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
