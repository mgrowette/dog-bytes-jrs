const { getVideos } = require('../dal')

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
}
