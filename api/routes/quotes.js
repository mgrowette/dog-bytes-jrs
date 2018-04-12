const { getQuotes } = require('../dal')

module.exports = app => {
  app.get('/quotes', (req, res) => {
    getQuotes({
      include_docs: true,
      startkey: 'quote_',
      endkey: 'quote_\ufff0'
    })
      .then(quote => res.send(quote))
      .catch(err => console.log(err))
  })
}
