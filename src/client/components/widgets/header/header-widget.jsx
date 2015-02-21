var React = require('react');

var HeaderWidget = React.createClass({
  render: function() {
    return (
      <header className='header-widget'>
        <nav className='top-nav'>
          <div className='container'>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Mappersmith Playground</a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = HeaderWidget;
