const express = require('express')
const route = express.Router()
const musicController = require('../controller/musicController')
const authController = require('../controller/authController')
const cookieParse = require('cookie-parser')
route.use(cookieParse()) // Requires to read cookie with req.cookies.

route.get('/', musicController.allMusic)

route.get('/addMusic', (req, res) => { res.render('addMusic') })

route.post('/addMusic', express.urlencoded({ extended: true }), musicController.addMusic)

route.get('/searchMusic', musicController.searchMusic)

route.get('/login', (req, res) => {
  if (req.cookies.key !== undefined) {
    return res.render('gerenciarConta')
  }
  res.render('login')
})

route.post('/login', express.urlencoded({ extended: true }), authController.login)

route.get('/deleteMusic', musicController.allDelete)

route.delete('/:id', musicController.deleteMusic)

route.delete('/', express.json(), musicController.deleteMusic)

route.get('/editMusic/:id', musicController.loadMusic)

route.post('/editMusic/:id', express.urlencoded({ extended: true }), musicController.editMusic)

module.exports = route
