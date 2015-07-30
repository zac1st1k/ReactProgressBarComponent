'use strict';

var React = require('react/addons');


require('styles/ProgressBar.scss');

var ProgressBar = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <div className="ProgressBar">
          <h2>Content for ProgressBar</h2>
              <progress value="28" max="100"></progress>
              <progress value="18" max="100"></progress>
              <progress value="78" max="100"></progress>
        </div>
      );
  }
});

module.exports = ProgressBar;
