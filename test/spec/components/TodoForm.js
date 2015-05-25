'use strict';

describe('TodoForm', function () {

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var TodoForm, component;

    beforeEach(function () {
        TodoForm = require('components/TodoForm');
        component = React.createElement(TodoForm);
    });

    it('should create a new instance of TodoForm', function () {
        expect(component).toBeDefined();
    });
});
