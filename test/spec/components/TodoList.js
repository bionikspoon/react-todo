'use strict';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'TodoList');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('TodoList', function () {

    var TodoList, component;

    beforeEach(() => {
        TodoList = require('components/TodoList');
        component = TestUtils.renderIntoDocument(<TodoList />)
    });

    it('should create a new instance of TodoList', () => {
        expect(component).toBeDefined();
    });
});
