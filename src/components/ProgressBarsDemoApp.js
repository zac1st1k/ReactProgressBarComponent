'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var ProgressBar = require('components/ProgressBar.js');

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageURL = require('../images/yeoman.png');

var ProgressBarsDemoApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <h1>ProgressBarsDemoApp</h1>
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<ProgressBarsDemoApp />, document.getElementById('content')); // jshint ignore:line
React.render(<ProgressBar />, document.getElementById('progress-bar')); // jshint ignore:line

module.exports = ProgressBarsDemoApp;
