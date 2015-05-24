'use strict';
import {Dispatcher} from 'flux';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'AppDispatcher');

class AppDispatcher extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        });
    }
}

export default new AppDispatcher();
