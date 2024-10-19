const express = require('express')
const router = express.Router()

const data = require('../controllers/userData')
const { GetAuthenticatedUser } = data
router.route('/auth').get(GetAuthenticatedUser)

module.exports = router
