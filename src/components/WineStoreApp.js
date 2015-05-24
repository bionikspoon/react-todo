'use strict';

import React from 'react/addons';
import TodoApp from 'components/TodoApp';
import debug from 'constants/DebugConstants';

// CSS
import 'normalize.css';
import imageURL from 'images/yeoman.png';
import 'styles/WineStoreApp.scss';


debug('Loading %s...', 'WineStoreApp');
const ReactTransitionGroup = React.addons.TransitionGroup;

export default class WineStoreApp extends React.Component {
    render() {
        debug('Params:', this.props);
        return (
            <div className='container-fluid WineStoreApp'>
                <ReactTransitionGroup transitionName="fade">
                    <TodoApp {...this.props} />

                </ReactTransitionGroup>
            </div>
        );
    }
}
