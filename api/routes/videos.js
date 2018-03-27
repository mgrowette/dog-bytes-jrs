const { getVideos, getVideo } = require('../dal')

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
}
