'use strict';

import React from 'react';
import {Route, run, DefaultRoute} from 'react-router';

import WineStoreApp from 'components/WineStoreApp';
import TodoApp from 'components/TodoApp';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'main');

const content = document.getElementById('content');

debug('Starting app...');
const Routes = (
    <Route handler={WineStoreApp}>
        <Route path="/"
               name="index"
               handler={WineStoreApp}>
            <DefaultRoute  handler={WineStoreApp}/>
            <Route name="all" handler={WineStoreApp}/>
            <Route name="archived"  handler={WineStoreApp}/>
            <Route name="active" handler={WineStoreApp} />
        </Route>

    </Route>
);

run(Routes, function (Handler) {
    React.render(<Handler {...this.props} />, content);
});
