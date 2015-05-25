'use strict';

import React from 'react';
import {Route, run, DefaultRoute} from 'react-router';

import TodoApp from 'components/TodoApp';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'main');

const content = document.getElementById('content');

debug('Starting app...');
const Routes = (
    <Route handler={TodoApp}>
        <Route path="/"
               name="index"
               handler={TodoApp}>
            <DefaultRoute  handler={TodoApp}/>
            <Route name="all" handler={TodoApp}/>
            <Route name="archived"  handler={TodoApp}/>
            <Route name="active" handler={TodoApp} />
        </Route>

    </Route>
);

run(Routes, function (Handler) {
    React.render(<Handler {...this.props} />, content);
});
