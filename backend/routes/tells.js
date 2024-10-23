const router = require('express').Router()
const tellsController = require('../controllers/tells')

const { getTells, sendTell } = tellsController

router.route('/').get(getTells).post(sendTell)

module.exports = router
