const Music = require('../model/music')

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

const deleteMusic = async (req, res) => {
  const id = req.params.id
  if (!id) {
    const id = req.body.id
  }
  try {
    await Music.findByIdAndDelete(id)
    res.send(id)
  } catch (error) {
    res.status(404).send(error)
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

const loadMusic = async (req, res) => {
  const id = req.params.id
  try {
    let doc = await Music.findById(id)
    res.render('editMusic', { body: doc })
  } catch (error) {
    res.status(404).send(error)
  }
}

const editMusic = async (req, res) => {
  const music = {}
  music.name = req.body.name
  music.artist = req.body.artist
  music.url = req.body.url
  music.link = req.body.link

  try {
    await Music.findByIdAndUpdate(req.params.id, music)
    res.render('messages/addSucess')
  } catch (error) {
    res.send(error)
  }
}

module.exports = { searchMusic, addMusic, allMusic, deleteMusic, allDelete, editMusic, loadMusic }
