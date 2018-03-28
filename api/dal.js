const { allDocs, getDoc, addDoc, updateDoc } = require('./lib/dal-helper')
const slugify = require('slugify')
const { join, toLower } = require('ramda')

const getVideos = options => allDocs(options || { include_docs: true })

const getVideo = id => getDoc(id)

const addVideo = doc => {
  const docId = `${doc.name} ${join(' ', doc.tags)}`
  console.log('Whats the docId?', docId)
  doc.type = 'video'
  doc._id = `${toLower(doc.type)}_${slugify(docId, { lower: true })}`
  return addDoc(doc)
}

const updateVideo = doc => updateDoc(doc)

const dal = {
  getVideos,
  getVideo,
  addVideo,
  updateVideo
}

module.exports = dal
