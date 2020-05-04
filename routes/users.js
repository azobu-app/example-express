const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({
    message: 'Get all users',
    users: [],
  })
})

module.exports = router
