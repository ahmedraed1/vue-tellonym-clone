const router = require('express').Router()

const usersController = require('../controllers/users')

const { searchUsers, getUser } = usersController

router.route('/').get(searchUsers)
router.route('/:username').get(getUser)

module.exports = router
