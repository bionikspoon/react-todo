'use strict';

import React from 'react/addons';
import {RouteHandler} from 'react-router'

import 'normalize.css';
import 'styles/App.scss';

import debug from 'constants/DebugConstants';
debug('Loading %s...', 'App');
const ReactTransitionGroup = React.addons.TransitionGroup;

export default class App extends React.Component {
    getFilter() {
        switch (this.props.params.filter) {
            case 'archived':
                return 'archived';
            case 'active':
                return 'active';
            default:
                return 'all';
        }

    }

    render() {
        return (
            <div className='App'>
                <div className='container-fluid '>
                    <ReactTransitionGroup transitionName="fade">
                        <RouteHandler filter={this.getFilter()} />
                    </ReactTransitionGroup>
                </div>
            </div>
        );
    }

}


