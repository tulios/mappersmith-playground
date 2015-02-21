module.exports = {
  host: 'http://match.mocaroni.com/Tlo277HoLFtm3Nk7kwHewWu5aUQ',
  rules: [{
    values: {
      gateway: {jsonp: true},
      processor: function(data) { return data.data }
    }
  }],
  resources: {
    Movie: {
      all: '/movies'
    },
    Serie: {
      all: '/series'
    }
  }
}
