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

  handleAddClick: function() {
    var option = React.findDOMNode(this.refs.select).value;
    switch(option) {
      case '1':
        var bar1 = React.findDOMNode(this.refs.progressBar1);
        bar1.value = bar1.value + 10;
        break;
      case '2':
        var bar2 = React.findDOMNode(this.refs.progressBar2);
        bar2.value = bar2.value + 10;
        break;
      case '3':
        var bar3 = React.findDOMNode(this.refs.progressBar3);
        bar3.value = bar3.value + 10;
        break;
      }
  },
  handleSubClick: function() {
    var option = React.findDOMNode(this.refs.select).value;
    switch(option) {
      case '1':
        var bar1 = React.findDOMNode(this.refs.progressBar1);
        bar1.value = bar1.value - 10;
        break;
      case '2':
        var bar2 = React.findDOMNode(this.refs.progressBar2);
        bar2.value = bar2.value - 10;
        break;
      case '3':
        var bar3 = React.findDOMNode(this.refs.progressBar3);
        bar3.value = bar3.value - 10;
        break;
      }
  },
  render: function () {
    return (
        <div className="ProgressBar">
          <h3>Prototype 1</h3>
          <progress value="20" max="100" ref="progressBar1"></progress>
          <progress value="50" max="100" ref="progressBar2"></progress>
          <progress value="40" max="100" ref="progressBar3"></progress>
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

module.exports = ProgressBar;
