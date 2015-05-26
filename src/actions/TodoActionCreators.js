'use strict';
import AppDispatcher from 'dispatcher/AppDispatcher';
import TodoConstants from 'constants/TodoConstants';

import debug from 'constants/DebugConstants';
debug('Loading %s...', 'TodoActionCreators');

export default  {
    populateData: () => {
        let request = require('bundle-loader!json-loader!../todos.json');
        request((data) => {
            AppDispatcher.handleAction({
                type: TodoConstants.POPULATE_DATA,
                data
            });
        });

    },
    updateText: (text) => {
        AppDispatcher.handleAction({
            type: TodoConstants.UPDATE_TEXT,
            text
        });
    },
    addTodo: () => {
        AppDispatcher.handleAction({
            type: TodoConstants.ADD_TODO
        });
    },
    toggleArchive: (index)=> {
        AppDispatcher.handleAction({
            type: TodoConstants.TOGGLE_ARCHIVE,
            index
        });
    },
    toggleAll: () => {
        AppDispatcher.handleAction({
            type: TodoConstants.TOGGLE_ALL
        })
    },
    removeTodo: (index)=> {
        AppDispatcher.handleAction({
            type: TodoConstants.REMOVE_TODO,
            index
        });
    },
    removeAll: () => {
        AppDispatcher.handleAction({
            type: TodoConstants.REMOVE_ALL
        })
    },
    removeArchived: () => {
        AppDispatcher.handleAction({
            type: TodoConstants.REMOVE_ARCHIVED
        })
    }


};
