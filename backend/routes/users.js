const router = require('express').Router()

const usersController = require('../controllers/users')

const { searchUsers, getUser, getFriends } = usersController

router.route('/').get(searchUsers)
router.route('/:username').get(getUser)
router.route('/:username/friends').get(getFriends)

module.exports = router
