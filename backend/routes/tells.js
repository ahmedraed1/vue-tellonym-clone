const router = require('express').Router()
const tellsController = require('../controllers/tells')

const { getTells, sendTell, answerTell, getTellsByUsername } = tellsController

router.route('/').get(getTells).post(sendTell)
router.route('/:id').put(answerTell)
router.route('/:username').get(getTellsByUsername)

module.exports = router
