'use strict';
import AppDispatcher from 'dispatcher/AppDispatcher';
import TodoConstants from 'constants/TodoConstants';


import debug from 'constants/DebugConstants';
debug('Loading %s...', 'TodoActionCreators');

export default  {
    fetch: () => {
        //HelloSlave.fetch().then((data) => {
        //    AppDispatcher.handleAction({
        //        type: HelloConstants.FETCHING,
        //        data: data
        //    });
        //})
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
    toggleArchive: (todo, index)=> {
        AppDispatcher.handleAction({
            type: TodoConstants.TOGGLE_ARCHIVE,
            todo,
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
    }


};
