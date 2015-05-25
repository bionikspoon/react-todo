'use strict';

describe('TodoList', function () {
  var React = require('react/addons');
  var TodoList, component;

  beforeEach(function () {
    TodoList = require('components/TodoList');
    component = React.createElement(TodoList);
  });

  it('should create a new instance of TodoList', function () {
    expect(component).toBeDefined();
  });
});
