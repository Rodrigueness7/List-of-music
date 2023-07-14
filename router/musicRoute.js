const express = require('express')
const route = express.Router()
const musicController = require('../controller/musicController')

route.get('/', musicController.allMusic)

route.get('/addMusic', (req, res) => { res.render('addMusic') })

route.post('/addMusic', express.urlencoded({ extended: true }), musicController.addMusic)

route.get('/allMusic', musicController.allMusic)

route.get('/allMusic', (req, res) => { res.render('allMusic') })

route.get('/searchMusic', musicController.searchMusic)

module.exports = route
