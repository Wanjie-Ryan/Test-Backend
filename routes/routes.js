const express = require('express')
const router = express.Router()
const {postPerson, getPerson, updatePerson} = require('../controllers/controllers')





router.route('/').get(getPerson).post(postPerson)
router.route('/:id').patch(updatePerson)
// router.route('/newperson').post(postPerson)

// router.post('/', postPerson)


module.exports = router


