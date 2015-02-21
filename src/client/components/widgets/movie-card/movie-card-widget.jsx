var React = require('react');

/*
 * Data:
 * {
 *   id: 1,
 *   imdb_url: "http://imdb.com/title/tt2713180",
 *   poster_url: "https://walter.trakt.us/images/movies/000/139/432/posters/thumb/175c16a46c.jpg",
 *   title: "Fury",
 *   trakttv_url: "http://trakt.tv/movies/fury-2014",
 *   year: 2014
 * }
 */
var MovieCardWidget = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div className='movie-card-widget card'>
        <div className="card-image">
          <img src={data.poster_url} />
        </div>
        <div className="card-content">
          <p><strong>Year:</strong> {data.year}</p>
        </div>
        <div className="card-action">
          <a href={data.imdb_url}>IMDB</a>
          <a href={data.tracktv_url}>Trakt.tv</a>
        </div>
      </div>
    )
  }
});

module.exports = MovieCardWidget;
