const express = require('express')
const router = express.Router()

const data = require('../controllers/userData')
const { getNames } = data
router.route('/names').get(getNames)

module.exports = router
