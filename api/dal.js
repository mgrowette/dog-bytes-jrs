const {
  allDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc
} = require('./lib/dal-helper')
const slugify = require('slugify')
const { join, toLower } = require('ramda')

const getVideos = options => allDocs(options || { include_docs: true })

const getVideo = id => getDoc(id)

const addVideo = doc => {
  const tags = doc.tags
  const difficultyTags = join(' ', tags.difficulty)
  const stackTags = join(' ', tags.stack)
  const contentTags = join(' ', tags.content)
  const tagList = `${difficultyTags} ${stackTags} ${contentTags}`
  const docId = `${doc.name} ${tagList}`
  doc.type = 'video'
  doc._id = `${toLower(doc.type)}_${slugify(docId, { lower: true })}`
  return addDoc(doc)
}

const updateVideo = doc => updateDoc(doc)

const deleteVideo = id => deleteDoc(id)

const dal = {
  getVideos,
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo
}

module.exports = dal
