var express = require('express');
var router = express.Router();

var journal = [
  {
    date: '10/10/2017',
    entry: 'This is an example of what the journal entries will look like'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

router.get('/journal', function(req, res) {
  res.send(journal);
});

module.exports = router;
