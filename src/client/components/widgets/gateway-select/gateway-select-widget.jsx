var React = require('react');

var GatewaySelectWidget = React.createClass({
  render: function() {
    return (
      <div className='gateway-select-widget col s6'>
        <label>Gateway with</label>
        <select>
          <option value="SessionClient">SessionStorage Cache</option>
          <option value="LocalClient">LocalStorage Cache</option>
        </select>
      </div>
    )
  },

  componentDidMount: function() {
    require('materialize-dropdown');
    require('materialize-select');

    var node = $(this.getDOMNode());
    var select = node.find('select');

    select.material_select();
    select.on('change', function(e) {
      this.props.onSelect($(e.target).val());
    }.bind(this));

    this.props.onSelect(select.val());
  }
});

module.exports = GatewaySelectWidget;
