var express = require('express')
var router = express.Router()

const bankController = require('../controllers/banks');

router.route('/banks')
      .get(bankController.getBanks)

module.exports = router;