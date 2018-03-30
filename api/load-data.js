require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'video_ramda-map-filter-reduce',
      type: 'video',
      name: 'Ramda: Map, Filter, and Reduce',
      desc:
        'In this video, Trip explains why Ramda is unequivocally awesome. He covers some mapping, reducing, and filtering. Enjoy.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '3:03:00',
      youTubeVideoURL: 'https://youtu.be/hopxHpzzw10',
      tags: ['ramda', 'map', 'filter', 'reduce', 'easy', 'review'],
      date: '01/19/2018'
    },
    {
      _id: 'video_material-ui-form-validation',
      type: 'video',
      name: 'Custom Form Validation - Part 1',
      desc:
        'A video describing how to set requirements within forms on Material UI. This entails setting field requirements, managing form state, and enabling/disabling form submission based upon that state',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '0:49:46',
      youTubeVideoURL: 'https://youtu.be/1u1WsblQ6fc',
      tags: ['material ui', 'form', 'state', 'react', 'redux', 'difficult'],
      date: '03/22/2018'
    },
    {
      _id: 'video_extra-test-video',
      type: 'video',
      name: 'Testing, Testing, 1, 2, 3',
      desc:
        'This video exists for the sole purpose of taking up space so my videos list has more things to click on. It also demonstrates that Tommy Wiseau has no clue what noise a chicken makes. Enjoy.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: null,
      youTubeVideoURL: 'https://www.youtube.com/watch?v=XTO_zNnzSs0',
      tags: [null],
      date: null
    }
  ])
  .then(result => console.log('Videos successfully uploaded', result))
  .catch(err => console.log('Error uploading documents', err))
