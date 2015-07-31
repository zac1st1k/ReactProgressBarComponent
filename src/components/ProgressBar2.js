'use strict';

var React = require('react/addons');

require('styles/ProgressBar2.scss');

var divStyle = {
  width: '30%'
};
var option = '';

var ProgressBar2 = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {
  },
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  updateProgress: function(barRef, offset) {
    var bar = React.findDOMNode(this.refs[barRef]);
    bar.style.width = (parseFloat(bar.style.width) <= Math.abs(offset)) && offset < 0
      ? '0' : ((parseFloat(bar.style.width) + offset) + '%');
    bar.parentNode.lastChild.innerText = parseFloat(bar.style.width) + '%';
    bar.style.backgroundColor = parseFloat(bar.style.width) > 100 ? 'red' : '#337ab7';
  },

  handleClickAdd10: function() {
    option = React.findDOMNode(this.refs.select).value;
    this.updateProgress(option, 10);
  },

  handleClickSub10: function() {
    option = React.findDOMNode(this.refs.select).value;
    this.updateProgress(option, -10);
  },

  handleClickAdd25: function() {
    option = React.findDOMNode(this.refs.select).value;
    this.updateProgress(option, 25);
  },

  handleClickSub25: function() {
    option = React.findDOMNode(this.refs.select).value;
    this.updateProgress(option, -25);
  },

  render: function () {
    return (
        <div className="ProgressBar2">
          <h2>Prototype 2 （Responvsive)</h2>
          <div className="progress">
            <div className="progress-bar" ref="progressBar1" style={divStyle}></div>
            <span>0%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" ref="progressBar2" style={divStyle}></div>
            <span>0%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" ref="progressBar3" style={divStyle}></div>
            <span>0%</span>
          </div>

          <select ref="select">
            <option value="progressBar1" ref="option1">ProgressBar1</option>
            <option value="progressBar2" ref="option2">ProgressBar2</option>
            <option value="progressBar3" ref="option3">ProgressBar3</option>
          </select>
          <input type="button" value="-25" onClick={this.handleClickSub25} />
          <input type="button" value="-10" onClick={this.handleClickSub10} />
          <input type="button" value="+10" onClick={this.handleClickAdd10} />
          <input type="button" value="+25" onClick={this.handleClickAdd25} />

        </div>
      );
  }
});

module.exports = ProgressBar2;
