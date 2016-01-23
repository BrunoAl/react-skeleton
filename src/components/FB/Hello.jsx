var React = require('react');
var Hello = React.createClass({
  render: function() {
    return <ul>Hello {this.props.name}</ul>
  }
});

module.exports = Hello;
