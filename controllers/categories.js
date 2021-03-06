const express = require('express')
const axios = require ('axios')
const router = express.Router()
const db = require('../models')


//GET each category form to NOT logged in users
router.get('/:category' , async(req, res)=>{
    category = req.params.category
    res.render(`categories/${category}`,{category})
})


module.exports = router