const router = require('express').Router()

const usersController = require('../controllers/users')

const { searchUsers, getUser, getFriends, followUser } = usersController

router.route('/').get(searchUsers)
router.route('/:username').get(getUser)
router.route('/:id/friends').get(getFriends)
router.route('/:id/follow').put(followUser)

module.exports = router
