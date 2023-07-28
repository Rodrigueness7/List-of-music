const Music = require('../model/music')
const config = require('../constant/config')

const searchMusic = async (req, res) => {
  const artist = req.query.artist

  try {
    const docs = await Music.find({ artist: new RegExp(artist, 'i') }).limit(5)
    if (docs.length !== 0) {
      return res.render('searchMusic', { docs })
    }

    res.render('messages/error')
  } catch (error) {
    res.send(error)
  }
}

const allMusic = async (req, res) => {
  try {
    const docs = await Music.find({})
    res.render('allMusic', { docs })
  } catch (error) {
    res.send(error)
  }
}

const addMusic = async (req, res) => {
  try {
    const music = new Music(req.body)
    if (music.name !== '' && music.artist !== '' && music.url !== '' && music.link !== '') {
      await music.save()
      res.render('messages/addSucess')
    } else {
      res.render('addMusic')
    }
  } catch (error) {
    res.send(error)
  }
}

const admin = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  try {
    if (username !== config.username || password !== config.password) {
      res.render('admin')
    } else {
      res.render('gerenciarConta')
    }
  } catch (error) {
    res.send(error)
  }
}

const deleteMusic = async (req, res) => {
  const id = req.params.id

  try {
    res.send(await Music.findByIdAndDelete(id))
  } catch (error) {
    res.send(error)
  }
}

const allDelete = async (req, res) => {
  try {
    const all = await Music.find({})
    res.render('deleteMusic', { all })
  } catch (error) {
    res.send(error)
  }
}

module.exports = { searchMusic, addMusic, allMusic, admin, deleteMusic, allDelete }
