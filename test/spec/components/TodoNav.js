'use strict';

describe('TodoNav', function () {
  var React = require('react/addons');
  var TodoNav, component;

  beforeEach(function () {
    TodoNav = require('components/TodoNav');
    component = React.createElement(TodoNav);
  });

  it('should create a new instance of TodoNav', function () {
    expect(component).toBeDefined();
  });
});
