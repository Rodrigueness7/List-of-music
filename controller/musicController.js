const Music = require('../model/music')

const searchMusic = async (req, res) => {
  const name = req.query.name

  try {
    const docs = await Music.find({ name: new RegExp(name, 'i') }).limit(5)
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
    if (music.music !== '' && music.name !== '' && music.url !== '') {
      await music.save()
      res.render('addSucess')
    } else {
      res.render('addMusic')
    }
  } catch (error) {
    res.send(error)
  }
}

module.exports = { searchMusic, addMusic, allMusic }
