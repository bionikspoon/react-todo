'use strict';

describe('TodoActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/TodoActionCreators');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
