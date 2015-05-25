'use strict';

describe('TodoItem', function () {
  var React = require('react/addons');
  var TodoItem, component;

  beforeEach(function () {
    TodoItem = require('components/TodoItem');
    component = React.createElement(TodoItem);
  });

  it('should create a new instance of TodoItem', function () {
    expect(component).toBeDefined();
  });
});
