const Music = require('../model/music')

const listMusic = async (req, res) => {
  const name = req.query.name

  try {
    const docs = await Music.find({ name })
    res.render('music', { docs })
  } catch (error) {
    res.send(error)
  }
}

const musics = async (req, res) => {
  try {
    const doc = await Music.find({})
    res.render('listMusic', { doc })
  } catch (error) {
    res.send(error)
  }
}

const addMusic = async (req, res) => {
  const music = new Music(req.body)
  try {
    await music.save()
    res.send('Música adicionada com sucesso')
  } catch (error) {
    res.send(error)
  }
}

module.exports = { listMusic, addMusic, musics }
