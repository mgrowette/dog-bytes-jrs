const { allDocs, getDoc } = require('./lib/dal-helper')

const getVideos = options => allDocs(options || { include_docs: true })

const getVideo = id => getDoc(id)

const dal = {
  getVideos,
  getVideo
}

module.exports = dal
