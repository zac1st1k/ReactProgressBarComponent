'use strict';

describe('ProgressBarsDemoApp', () => {
  let React = require('react/addons');
  let ProgressBarsDemoApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ProgressBarsDemoApp = require('components/ProgressBarsDemoApp.js');
    component = React.createElement(ProgressBarsDemoApp);
  });

  it('should create a new instance of ProgressBarsDemoApp', () => {
    expect(component).toBeDefined();
  });
});
