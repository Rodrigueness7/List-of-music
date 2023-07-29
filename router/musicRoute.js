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
  console.log(req.cookies.key) // See in console.log a data cookie.
  if (req.cookies.key !== undefined) {
    return res.render('gerenciarConta')
  }
  res.render('login')
})

route.post('/login', express.urlencoded({ extended: true }), authController.login)

route.get('/deleteMusic', musicController.allDelete)

route.delete('/:id', musicController.deleteMusic)

module.exports = route
