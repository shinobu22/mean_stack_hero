const express = require('express')
const router = express.Router()

router.get('/product', (req, res)=> {
    res.json({
        name: 'macbook',
        price: '100'
    })
})
router.get('/product/:id', (req, res)=> {})
router.post('/product', (req, res)=> {})
router.put('/product/:id', (req, res)=> {})
router.delete('/product/:id', (req, res)=> {})

module.exports = router
