'use strict';

describe('TodoApp', function () {
  var React = require('react/addons');
  var TodoApp, component;

  beforeEach(function () {
    TodoApp = require('components/TodoApp.js');
    component = React.createElement(TodoApp);
  });

  it('should create a new instance of TodoApp', function () {
    expect(component).toBeDefined();
  });
});
