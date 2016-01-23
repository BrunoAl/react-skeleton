var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

// Facebook tutorial
var Hello = require('./components/FB/Hello.jsx');
var Timer = require('./components/FB/Timer.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));
ReactDOM.render(<Hello name='Bruno'/>, document.getElementById('hello'));
ReactDOM.render(<Timer />, document.getElementById('timer'));
