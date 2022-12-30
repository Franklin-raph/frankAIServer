const express = require('express')
const {chatGptClone, imageGeneration} = require('../controllers/chatGPT')

const router = express.Router()

router.post('/chatGptClone', chatGptClone)
router.post('/imageGeneration', imageGeneration)

module.exports = router