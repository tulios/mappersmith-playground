var React = require('react');
var MovieCardWidget = require('app/components/widgets/movie-card');
var CircularLoaderWidget = require('app/components/widgets/circular-loader');

var MoviesListWidget = React.createClass({
  render: function() {
    var movies = this.props.movies || [];
    var moviesList = (
      <div className='col s12'>
        <CircularLoaderWidget />
      </div>
    );

    if (movies.length > 0) {
      moviesList = movies.map(function(data) {
        return (
          <div key={data.id} className='col s2'>
            <MovieCardWidget data={data}/>
          </div>
        )
      })
    }
    return (
      <div className='movies-list-widget row'>
        {moviesList}
      </div>
    )
  }
});

module.exports = MoviesListWidget;
