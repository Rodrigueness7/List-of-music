const config = require('../constant/config')

const login = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  try {
    if (username !== config.username || password !== config.password) {
      return res.render('login')
    }
    res.cookie('key', 'token+generator+in+mongodb', { maxAge: 900000 }) // Session expires after 15 minutes
    res.render('gerenciarConta')
  } catch (error) {
    res.send(error)
  }
}

module.exports = { login }
