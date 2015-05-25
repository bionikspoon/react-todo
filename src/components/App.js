'use strict';

import React from 'react/addons';
import {RouteHandler} from 'react-router'

import 'normalize.css';
import 'styles/App.scss';

import debug from 'constants/DebugConstants';
debug('Loading %s...', 'App');
const TransitionGroup = React.addons.TransitionGroup;

export default class App extends React.Component {

    render() {
        debug(this.props.params);

        return (
            <div className='App'>
                <div className='container-fluid '>
                    <RouteHandler filter={this.props.params.filter} />
                </div>
            </div>
        );
    }

}


