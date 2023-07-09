const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const path = require('path')
const musicRoute = require('./router/musicRoute')
const config = require('./constant/config')

mongoose.connect(config.database)

const db = mongoose.connection

db.on('error', () => { console.log('Houver um erro') })
db.once('open', () => { console.log('Banco carregado') })

app.use('/', musicRoute)
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'template'))

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})
