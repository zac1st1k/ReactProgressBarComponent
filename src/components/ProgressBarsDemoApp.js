'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var ProgressBar = require('components/ProgressBar.js');
var ProgressBar2 = require('components/ProgressBar2.js');

// CSS
require('normalize.css');
require('../styles/main.scss');

//var imageURL = require('../images/yeoman.png');

var ProgressBarsDemoApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <h1>ProgressBarsDemo</h1>
        </ReactTransitionGroup>
      </div>
    );
  }
});

React.render(<ProgressBarsDemoApp />, document.getElementById('content')); // jshint ignore:line
React.render(<ProgressBar />, document.getElementById('progress-bar')); // jshint ignore:line
React.render(<ProgressBar2 />, document.getElementById('progress-bar2')); // jshint ignore:line

module.exports = ProgressBarsDemoApp;
