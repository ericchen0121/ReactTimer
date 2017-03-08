var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load foundation
// require doesn't know how to load a css file, so need css loader 'css!'
// still need to inject css into html with 'style!' style loader
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!appStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={Main}>
    </Router>
  </Router>,
  document.getElementById('app')
);
