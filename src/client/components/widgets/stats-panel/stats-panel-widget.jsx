var React = require('react');

var StatsPanelWidget = React.createClass({
  render: function() {
    var stats = this.props.stats;
    var badgeCssClass = (stats || {}).cacheHit ? 'hit' : 'miss';
    var clearCacheCss = 'waves-effect waves-light btn clear-cache';
    if (this.props.clearCacheDisabled) clearCacheCss += ' disabled';

    var info = (stats != null) ? <div className='valign left-align'>
      Cache <span className={'badge cache ' + badgeCssClass}></span> |
      time elapsed <strong>{stats.timeElapsedHumanized}</strong>
      <p>
        <a className='waves-effect waves-light btn retry'
           onClick={this.props.onRetryClick}>
          Retry
        </a>
        <a className={clearCacheCss}
           onClick={this.props.onClearCacheClick}>
          Clear cache
        </a>
      </p>
    </div> : null

    return (
      <div className='stats-panel-widget col s6'>
        <div className='valign-wrapper'>
          {info}
        </div>
      </div>
    )
  }

});

module.exports = StatsPanelWidget;
