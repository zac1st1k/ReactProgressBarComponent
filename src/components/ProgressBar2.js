'use strict';

var React = require('react/addons');

require('styles/ProgressBar2.scss');

var ProgressBar2 = React.createClass({
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
        <div className="ProgressBar2">
          <h2>Prototype 2 （Responvsive)</h2>
          <div className="progress">
            <div className="progress-bar">27%</div>
          </div>
          <div className="progress">
            <div className="progress-bar">35%</div>
          </div>
          <div className="progress">
            <div className="progress-bar">37%</div>
          </div>
          <select ref="select">
            <option value="1" ref="option1">ProgressBar1</option>
            <option value="2" ref="option2">ProgressBar2</option>
            <option value="3" ref="option3">ProgressBar3</option>
          </select>
          <input type="button" value="+" onClick={this.handleAddClick} />
          <input type="button" value="-" onClick={this.handleSubClick} />
        </div>
      );
  }
});

module.exports = ProgressBar2;
