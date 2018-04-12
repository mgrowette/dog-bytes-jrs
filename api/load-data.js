require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'video_ramda-map-filter-objects-arrays-quick-review',
      type: 'video',
      name: 'Ramda: Map, Filter, and Reduce',
      desc:
        'In this video, Trip does a review of a objects and array, as well as the helpful functions associated with them. A lot of this work is done within Codepen.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '3:03:00',
      youTubeVideoURL: 'https://youtu.be/hopxHpzzw10',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: [
            'Map',
            'Ramda',
            'Reduce',
            'Filter',
            'Objects',
            'Arrays',
            'Codepen',
            'Dot Notation',
            'Square Bracket Notation'
          ]
        }
      ],
      date: '01/19/18',
      notes: 'From 2:39:35 to the end there is no audio.',
      imgPath: '/ramda.png'
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
      tags: [
        { title: 'Difficulty', chips: ['Advanced'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: [
            'Material UI',
            'State',
            'Form Validation',
            'Redux',
            'React',
            'Form'
          ]
        }
      ],
      date: '03/22/18',
      notes: 'No notes at this time.',
      imgPath: '/material-ui.png'
    },
    {
      _id: 'video_beginner-ramda-introduction-basic-javascript',
      type: 'video',
      name: 'Introduction to Ramda and Basic JavaScript functionality',
      desc:
        'In this video, Trip does an overview of very basic JavaScript native functions and how to model these functions within the immutable database Ramda.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '3:42:08',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=5EWYsxPnLrg&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Ramda', 'Functions', 'Codepen', 'Immutable']
        }
      ],
      date: '01/16/18',
      notes: 'The last hour and a half of this video is without audio.',
      imgPath: '/ramda.png'
    },
    {
      _id: 'video_beginner-objects-arrays-ramda-filter-map-reject',
      type: 'video',
      name:
        'Introduction to the Use and Behavior of Objects and Arrays within JavaScript.',
      desc:
        'In this video, Trip discusses the usage of objects and arrays in JavaScript. This includes how they are sturctured, some properties and methods, and how to access the data within. He also covers how to use filter, reject, and map with arrays of data.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '7:58:09',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=WrAqrwr42CQ&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: [
            'Ramda',
            'Objects',
            'Arrays',
            'Dot Notation',
            'Filter',
            'Square Bracket Notation',
            'Filter',
            'Reject',
            'Map'
          ]
        }
      ],
      date: '01/18/18',
      notes:
        'From 0:41:10 to 1:44:52, 4:52:20 to 6:54:15, and 7:43:15 to the end there is no audio.',
      imgPath: '/ramda.png'
    },
    {
      _id:
        'video_scope-pure-function-side-effects-ramda-arrays-objects-higher-order-functions',
      type: 'video',
      name: 'Introduction to Scope, Pure Functions, and Side Effects',
      desc:
        'In this video trip discusses what it means for a function to be pure, what it means for a function to have side effects, and how the two phenomna relate. He also covers what it means to be immutable and why that trait is desirable, and he defines higher order functions.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '3:35:46',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=PlVK-D77tGo&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Scope', 'Immutable', 'Map', 'Objects', 'Arrays']
        }
      ],
      date: '01/22/18',
      notes:
        'From 0:47:28 to 1:27:03 and 1:51:25 to 2:03:57 there is no audio.',
      imgPath: '/javascript-scope.png'
    },
    {
      _id: 'video_cybertron-level-1-to-5-reviews-map-filter-reduce',
      type: 'video',
      name: 'Cybertron Review: Level 1 to 5',
      desc:
        'In this video, Trip reviews Cybertron levels 1-5. He uses Ramda to model the challenges. These exercises extensively cover the functions map, filter, and reduce. He also uses Python Tutor to break down the flow of information as reduce is used to manipulate it. Most of the video is without audio, but it has valuable Ramda work in it.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '07:43:59',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=6NvU9yRv9YU&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Cybertron', 'Map', 'Filter', 'Reduce', 'Ramda', 'Compose']
        }
      ],
      date: '01/24/18',
      notes:
        'From 1:28:49 to 2:06:12, 2:09:57 to 5:21:50, and 5:57:17 to the end there is no audio.',
      imgPath: '/cybertron.jpg'
    },
    {
      _id: 'video_todo-list-cli-part-2',
      type: 'video',
      name: 'CLI Todo List, Part 2',
      desc: `This video is part 2 in series of videos that creates a functional Todo list that can be run in a user's CLI. There is some good practice on writing README files.`,
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:00:32',
      youTubeVideoURL: 'https://youtu.be/eCzvQeloC-A',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['CLI', 'README']
        }
      ],
      date: '01/26/28',
      notes: 'No audio breaks.',
      imgPath: '/matrix-code.jpg'
    },
    {
      _id: 'video_intro-to-github',
      type: 'video',
      name: 'Introduction to Git and Github',
      desc:
        'In this video, Trip gives an overview of Git and Github and the information flow within. This includes how to make a repository from scratch in the terminal, how to add files, and how to navigate the repository in the terminal. Next, he covers how to access and manipulate repositories in the text editor Atom. An extremely helpful video for anyone unfamiliar with Github.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:37:56',
      youTubeVideoURL: ' https://youtu.be/sKHSovWGT0c',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Github', 'CLI']
        }
      ],
      date: '01/29/18',
      notes: 'No audio from 49:07 to 1:03:41',
      imgPath: '/octocat.png'
    },
    {
      _id: 'video_todo-api-introduction-express-github-cli',
      type: 'video',
      name: 'Introduction to Express API',
      desc:
        'An overview of APIs, what they do, and how to create one using Express. This is done through the context of creating an API that manages a todo list. This is also a nice review of how to manage repositories in Github, as well as creating repositories locally.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '2:20:33',
      youTubeVideoURL: 'https://youtu.be/KD2yU934M2M',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Express', 'Github', 'CLI']
        }
      ],
      date: '01/31/18',
      notes: 'No audio from 0:47:15 to 1:00:31 and from 1:59:04 to the end.',
      imgPath: '/api.png'
    },
    {
      _id: 'video_express-api-post-todos-http-ramda-postman-error-handling',
      type: 'video',
      name: 'Using POST to Add to the Todos Express API',
      desc:
        'In this video, Trip demonstrates how to use the HTTP verb POST to add an item to the Todos Express API. He also introduces Postman as a means of verifying API route functionality. Ramda functions - specifically merge, propOr, omit, keys - are also used to model how data is added with POST, as well as how to require certain fields when submitting a POST. He then covers error handling middleware with Express. ',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '2:02:26',
      youTubeVideoURL: 'https://youtu.be/GBZwB2UvLyA',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: [
            'Ramda',
            'Compose',
            'POST',
            'Express',
            'Postman',
            'Error Handling',
            'Middleware'
          ]
        }
      ],
      date: '02/01/18',
      notes: 'No audio from 0:52:49 to 1:08:10.',
      imgPath: '/http.jpg'
    },
    {
      _id:
        'video_express-api-review-cats-error-handling-middleware-post-put-get-postman',
      type: 'video',
      name: 'API Review and Creating a Cats Express API',
      desc:
        'In this video, Trip reviews APIs by creating a Cats Express API and creating routes for GET, POST, AND PUT. He again uses Ramda to model data manipulation and Github to create a repository. Also demonstrated is the use of error handling middleware. A great review of how to set up and use an Express API.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '3:26:39',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=z5KP8BARPHE&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Github', 'Filter', 'Postman', 'Ramda', 'GET', 'POST', 'PUT']
        }
      ],
      date: '02/05/18',
      notes: 'No audio from 2:49:10 to the end.',
      imgPath: '/express-js.png'
    },
    {
      _id: 'video_async-couchdb-callback-functions-call-stack-browser',
      type: 'video',
      name: 'CouchDB, Asynchronous Calls, and the Call Stack',
      desc:
        'In this video, Trip adapts his Todos API to store information in a PouchDB database rather than locally on his machine. This involves the use of asynchronous functions and callback functions. He also plays a YouTube video explaining what an event loop is and how it works. A great demonstration of the call stack.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '0:38:20',
      youTubeVideoURL: 'https://youtu.be/JuQ5n7sGLtY',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['API', 'DB'] },
        {
          title: 'Content',
          chips: [
            'CouchDB',
            'Callback',
            'POST',
            'Postman',
            'GET',
            'Call Stack',
            'Async'
          ]
        }
      ],
      date: '02/07/18',
      notes: 'No audio breaks.',
      imgPath: '/call-stack.jpg'
    },
    {
      _id: 'video_review-bulkDocs-introduction-allDocs-promises-async',
      type: 'video',
      name: 'Review of CouchDb bulkDocs, Introduction to allDocs and Promises',
      desc:
        'In this video, Trip gives a review of CouchDB bulkDocs and allDocs operations. This is done in the context of a dogs API. He also introduces the concept of using promises rather than callback functions to handle asynchronous function calls.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '4:05:24',
      youTubeVideoURL: 'https://youtu.be/LMa_shwmoGo',
      tags: [
        { title: 'Difficulty', chips: ['Advanced'] },
        { title: 'Stack', chips: ['DB', 'API'] },
        {
          title: 'Content',
          chips: ['bulkDocs', 'CouchDB', 'Promises', 'allDocs', 'Async']
        }
      ],
      date: '02/13/18',
      notes:
        'No audio from 0:39:32 to 1:32:56 and 1:54:27 to 2:07:51. The video essentially ends at 2:48:51, as nothing new is demonstrated on the screen after that time.',
      imgPath: '/js-promise.png'
    },
    {
      _id: 'video_mango-queries-roo-find-search-roo-couchdb',
      type: 'video',
      name: 'Using Mango Queries to Find Documents in the CouchDB Database',
      desc:
        'In this video, Trip uses Mango queries to search his database documents on CouchDB. This involves creating indexes and running the actual queries. There is also some coverage of using Roo.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:51:44',
      youTubeVideoURL: 'https://youtu.be/vzo5jh72llY',
      tags: [
        { title: 'Difficulty', chips: ['Advanced'] },
        { title: 'Stack', chips: ['DB', 'API'] },
        {
          title: 'Content',
          chips: ['Queries', 'Mango', 'Promises', 'Async', 'Roo', 'CouchDB']
        }
      ],
      date: '02/14/18',
      notes: 'No audio from 0:34:03 to 0:48:36',
      imgPath: '/couchdb-logo.png'
    },
    {
      _id: 'video_promises-quick-and-dirty',
      type: 'video',
      name: 'Promises: A Quick Review',
      desc:
        'In this video, Trip gives a quick and dirty demonstration of how to use promises.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '0:20:11',
      youTubeVideoURL: 'https://youtu.be/2x7qYYpfo3E',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Promises']
        }
      ],
      date: '02/14/18',
      notes: 'No significant audio breaks.',
      imgPath: '/CouchDB.png'
    },
    {
      _id: 'video_testing-tape-supertest-introduction-api',
      type: 'video',
      name: 'Testing with Tape and Supertest',
      desc:
        'In this video, Trip covers how to write tests for APIs using dependencies Tape and Supertest. The video includes how to install and how to use these dependencies. Testing allows for a developer to check whether the code they have written behaves in the way they expect it to.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '2:22:38',
      youTubeVideoURL:
        'https://www.youtube.com/watch?v=pbvFGIaLnwE&feature=youtu.be',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['API'] },
        {
          title: 'Content',
          chips: ['Testing', 'Supertest', 'Tape', 'Promises']
        }
      ],
      date: '02/14/18',
      notes: 'No audio until 0:14:48 and from 1:02:20 to 1:50:08.',
      imgPath: '/js-testing.jpg'
    },
    {
      _id: 'video_html-css-overview-components-ui-beginner-dynamic',
      type: 'video',
      name: 'HTML and CSS Overview - Thinking About Components',
      desc:
        'In this video, Tom gives an overview of using HTML and CSS to style the front end of an express application. This includes building text boxes, styling with color and margins and padding, and  how to add images to the screen.',
      instructor: 'Tom Wilson',
      instructorPicData: null,
      duration: '2:11:17',
      youTubeVideoURL: 'https://youtu.be/PVKxSVlPC9E',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: ['HTML', 'CSS', 'Express']
        }
      ],
      date: '02/26/18',
      notes: 'No significant audio breaks',
      imgPath: '/CSS.jpg'
    },
    {
      _id:
        'video_introduction-relational-database-management-systeems-sql-mysql-relational-data-modeling',
      type: 'video',
      name:
        'Introduction to Relational Database Management Systems: SQL & MySQL',
      desc:
        'In this video, Trip introduces the concept of Relational Database Management Systems (RDBMS), specifically SQL. He then delves into the use of SQL with MySQL, how to install MySQL, and how to run it in your terminal. The video also introduces Relational Data Modeling, a form of data modeling completely separate from JSON. A great video for anyone who needs to review RDMS, SQL, and MySQL.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:17:48',
      youTubeVideoURL: 'https://youtu.be/5Klrs8dPHAk',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['DB'] },
        {
          title: 'Content',
          chips: ['RDBMS', 'SQL', 'MySQL', 'CLI']
        }
      ],
      date: '02/20/18',
      notes: 'No significant audio breaks.',
      imgPath: '/mysql.jpg'
    },
    {
      _id:
        'video_relational-database-management-systems-relational-data-modeling-sql-mysql-rdbms',
      type: 'video',
      name: 'A Deeper Look at Relational Data Modeling - Creating RDBMS Tables',
      desc:
        'In this video, Trip leads a deeper dive into how to structure data for use in RDBMS. This includes how to create parent and child tables and how to relate them using primary and foreign keys.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:12:09',
      youTubeVideoURL: 'https://youtu.be/0Q5o0-os0Gg',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['DB'] },
        {
          title: 'Content',
          chips: ['RDBMS', 'SQL', 'MySQL']
        }
      ],
      date: '02/20/18',
      notes: 'No audio from 1:06:11 to the end.',
      imgPath: '/mysql-workbench.png'
    },
    {
      _id:
        'video_introduction-creating-tables-mysql-workbench-primary-keys-foreign-keys',
      type: 'video',
      name: 'An Introduction to Creating Tables in MySQL Workbench',
      desc:
        'In this video, Trip introduces MySQL as a means to create tables and model data for RDBMS. This involves parent and child tables, as well as primary and foreign keys.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '1:03:30',
      youTubeVideoURL: 'https://youtu.be/NPk3AH_8Bag',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['DB'] },
        {
          title: 'Content',
          chips: ['MySQL', 'SQL', 'RDBMS']
        }
      ],
      date: '02/20/18',
      notes: 'No audio from 1:09:06 to the end.',
      imgPath: '/mysql-workbench-table.png'
    },
    {
      _id: 'video_react-tutorial-introduction-state-beginner-ui',
      type: 'video',
      name: 'Introduction to and Tutorial of React',
      desc:
        'In this video, Trip introduces React and walks through an online React tutorial. He covers how React works, as well as the concept of state.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '2:00:09',
      youTubeVideoURL: 'https://youtu.be/fNXqmC37vOY',
      tags: [
        { title: 'Difficulty', chips: ['Beginner'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: ['React', 'State']
        }
      ],
      date: '02/28/18',
      notes: 'No audio from 1:14:26 to 1:36:18',
      imgPath: '/react-js.png'
    },
    {
      _id: 'video_tachyons-react-app-portfolio-state-components',
      type: 'video',
      name: 'Creating a React App - React Portfolio App',
      desc:
        'In this video, Trip and Tom cover how to create a React app with a demonstration that creates a React Portfolio App. A great exercise for beginners looking to understand React apps and stateful class components.',
      instructor: 'Trip Ottinger & Tom Wilson',
      instructorPicData: null,
      duration: '2:25:10',
      youTubeVideoURL: 'https://www.youtube.com/watch?v=8yljR-u28UM',
      tags: [
        { title: 'Difficulty', chips: ['Intermediate'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: ['Tachyons', 'State', 'React']
        }
      ],
      date: '03/01/18',
      notes: 'No significant auido breaks.',
      imgPath: '/tachyons.jpeg'
    },
    {
      _id: 'video_react-app-creating-a-link-to-new-page',
      type: 'video',
      name: 'React Five-n-One Stage 6: Creating a List Item Link',
      desc:
        'In this video, Trip demonstrates how to turn a single list item into a link that routes the user to a new show page.',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '0:35:00',
      youTubeVideoURL: 'https://youtu.be/XOrx39RPEQ0',
      tags: [
        { title: 'Difficulty', chips: ['Advanced'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: ['React', 'Redux', 'State']
        }
      ],
      date: '03/09/18',
      notes: 'No significant audio breaks.',
      imgPath: '/redux-js.png'
    },
    {
      _id: 'video_react-app-menu-app-bar-withStyles-reusable-component',
      type: 'video',
      name: 'React App - Creating a Menu App Bar',
      desc:
        'In this video, Trip covers how to create a reusable Menu App Bar component using Material UI and styling it using withStyles classes. ',
      instructor: 'Trip Ottinger',
      instructorPicData: null,
      duration: '0:47:33',
      youTubeVideoURL: 'https://youtu.be/XOrx39RPEQ0',
      tags: [
        { title: 'Difficulty', chips: ['Advanced'] },
        { title: 'Stack', chips: ['UI'] },
        {
          title: 'Content',
          chips: ['React', 'Redux', 'State', 'Material UI']
        }
      ],
      date: '03/15/18',
      notes: 'No significant audio breaks.',
      imgPath: '/material-ui2.png'
    }
  ])
  .then(result => console.log('Videos successfully uploaded', result))
  .catch(err => console.log('Error uploading documents', err))
