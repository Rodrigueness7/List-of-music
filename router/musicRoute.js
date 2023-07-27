const express = require('express')
const route = express.Router()
const musicController = require('../controller/musicController')

route.get('/', musicController.allMusic)

route.get('/addMusic', (req, res) => { res.render('addMusic') })

route.post('/addMusic', express.urlencoded({ extended: true }), musicController.addMusic)

route.get('/searchMusic', musicController.searchMusic)

route.get('/admin', (req, res) => res.render('admin'))

route.post('/admin', express.urlencoded({ extended: true }), musicController.admin)

route.get('/deleteMusic', musicController.allDelete)

route.delete('/:id', musicController.deleteMusic)

module.exports = route
