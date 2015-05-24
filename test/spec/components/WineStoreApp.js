'use strict';

describe('WineStoreApp', function () {
  var React = require('react/addons');
  var WineStoreApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WineStoreApp = require('components/WineStoreApp.js');
    component = React.createElement(WineStoreApp);
  });

  it('should create a new instance of WineStoreApp', function () {
    expect(component).toBeDefined();
  });
});
