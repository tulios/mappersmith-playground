var React = require('react');

var API = require('app/api-clients');

var Header = require('app/components/widgets/header');
var GithubRibbon = require('./github-ribbon.jsx');
var GatewaySelect = require('app/components/widgets/gateway-select');
var StatsPanel = require('app/components/widgets/stats-panel');
var MoviesList = require('app/components/widgets/movies-list');

var HomeView = React.createClass({

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='home-view'>
        <Header />
        <GithubRibbon />
        <div className='container'>
          <div className='row'>
            <h1 className='col s12'>Movies</h1>
            <GatewaySelect onSelect={this.handleOnGatewaySelect} />
            <StatsPanel
                stats={this.state.stats}
                onRetryClick={this.handleRetryClick}
                onClearCacheClick={this.handleClearCacheClick}
                clearCacheDisabled={this.state.clearCacheDisabled}
            />
          </div>
          <MoviesList movies={this.state.movies} />
        </div>
      </div>
    )
  },

  componentDidUpdate: function() {
    this.updateMovies();
  },

  handleOnGatewaySelect: function(clientName) {
    this.setState({
      clientName: clientName,
      Client: API[clientName],
      movies: null,
      stats: null
    });
  },

  handleRetryClick: function(e) {
    e.preventDefault();
    this.setState({movies: null, stats: null});
  },

  handleClearCacheClick: function(e) {
    e.preventDefault();
    this.setState({clearCacheDisabled: true});
    this.getCacheStore().clear();
  },

  getCacheStore: function() {
    var gateway = API.getGateway(this.state.clientName);
    return gateway.cacheStore;
  },

  updateMovies: function() {
    var Client = this.state.Client;
    var movies = this.state.movies;

    if (!Client || this.state.movies != null) {
      return;
    }

    Client.Movie.all(function(data, stats) {
      this.setState({
        movies: data,
        stats: stats,
        clearCacheDisabled: false
      });

    }.bind(this));
  }

});

module.exports = HomeView
