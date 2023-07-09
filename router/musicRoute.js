const express = require('express')
const route = express.Router()
const musicController = require('../controller/musicController')

route.get('/', (_req, res) => { res.render('addMusic') })

route.get('/musics', musicController.musics)

route.post('/', express.urlencoded({ extended: true }), musicController.addMusic)

route.get('/musics', (_req, res) => { res.render('listMusic') })

route.get('/:name', musicController.listMusic)

module.exports = route
