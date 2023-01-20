const express = require('express')
const router = express.Router()
const {postPerson, getPerson} = require('../controllers/controllers')





router.route('/newperson').post(postPerson)


module.exports = router


