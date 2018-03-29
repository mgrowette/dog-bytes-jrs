const {
  getVideos,
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo
} = require('../dal')

module.exports = app => {
  app.get('/videos', (req, res) => {
    getVideos({
      include_docs: true,
      startkey: 'video_',
      endkey: 'video_\ufff0'
    })
      .then(videos => res.send(videos))
      .catch(err => console.log(err))
  })
  app.get('/videos/:id', (req, res) => {
    getVideo(req.params.id)
      .then(doc => res.send(doc))
      .catch(err => console.log(err))
  })
  app.post('/videos', (req, res) => {
    addVideo(req.body)
      .then(video => res.send(video))
      .catch(err => console.log(err))
  })
  app.put('/videos/:id', (req, res) => {
    updateVideo(req.body)
      .then(doc => res.send(doc))
      .catch(err => console.log(err))
  })
  app.delete('/videos/:id', (req, res) => {
    deleteVideo(req.params.id)
      .then(deletedVid => res.send(deletedVid))
      .catch(err => console.log(err))
  })
}
