const express = require('express')
const route = express.Router()
const musicController = require('../controller/musicController')

route.get('/addMusic', (req, res) => { res.render('addMusic') })

route.post('/addMusic', express.urlencoded({ extended: true }), musicController.addMusic)

route.get('/allMusic', musicController.musics)

route.get('/allMusic', (req, res) => { res.render('allMusic') })

route.get('/searchMusic', musicController.listMusic)

module.exports = route
