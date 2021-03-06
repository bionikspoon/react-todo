'use strict';

import React from 'react';
import {Route, run, DefaultRoute} from 'react-router';

import App from 'components/App';
import TodoApp from 'components/TodoApp';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'main');

const content = document.getElementById('content');

debug('Starting app...');
const Routes = (
    <Route path="/"
           name="index"
           handler={App}>
        <DefaultRoute handler={TodoApp} />
        <Route name=":filter"
               handler={TodoApp} />
        <Route name="all"
               handler={TodoApp} />
        <Route name="archived"
               handler={TodoApp} />
        <Route name="active"
               handler={TodoApp} />
    </Route>
);

run(Routes, function (Handler, state) {
    React.render(<Handler params={state.params}/>, content);
});
