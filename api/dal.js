const { allDocs } = require('./lib/dal-helper')

const getVideos = options => allDocs(options || { include_docs: true })

const dal = {
  getVideos
}

module.exports = dal
