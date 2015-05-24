'use strict';

describe('TodoStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/TodoStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
