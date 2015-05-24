'use strict';
import {EventEmitter} from 'events';

import AppDispatcher from 'dispatcher/AppDispatcher';
import TodoConstants from 'constants/TodoConstants';
import debug from 'constants/DebugConstants';

debug('Loading %s...', 'TodoStore');
const CHANGE_EVENT = 'CHANGE_EVENT';

class TodoStore extends EventEmitter {
    _todos = [
        {
            _id: 1,
            text: 'First todo',
            archived: false

        },
        {
            _id: 2,
            text: '2nd todo',
            archived: false

        },
        {
            _id: 3,
            text: 'third todo',
            archived: false

        }
    ];
    _inputText;

    getState() {
        return {
            todos: this._todos,
            inputText: this._inputText,
            allAreArchived: this.allAreArchived
        };
    }

    get allAreArchived() {
        return this._todos.every((todo) => {
            return todo.archived;
        });
    }

    set inputText(value) {
        this._inputText = value;
    }

    addTodo() {
        let todo = {
            _id: Date.now(),
            text: this._inputText,
            archived: false
        };

        this._todos.push(todo);
        this.inputText = "";
    }

    toggleAll() {
        let allAreArchived = this.allAreArchived;
        this._todos = this._todos.map((todo) => {
            debug(todo);
            todo.archived = !allAreArchived;
            return todo;
        });
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }


}
const Store = new TodoStore();

AppDispatcher.register((payload) => {

    const action = payload.action;

    switch (action.type) {
        case TodoConstants.UPDATE_TEXT:
            Store.inputText = action.text;
            Store.emitChange();
            break;
        case TodoConstants.ADD_TODO:
            debug('Adding Todo', Store._todos, Store._inputText);
            Store.addTodo();
            Store.emitChange();
            break;
        case TodoConstants.TOGGLE_ARCHIVE:
            debug('Toggling Archive Status: ', action.todo, action.index);
            Store._todos[action.index].archived =
                !Store._todos[action.index].archived;
            Store.emitChange();
            break;
        case TodoConstants.TOGGLE_ALL:
            debug('Toggling All');
            Store.toggleAll();
            Store.emitChange();
            break;
        case TodoConstants.REMOVE_TODO:
            debug('Removing Todo: ', action.index);
            Store._todos.splice(action.index, 1);
            Store.emitChange();
            break;
        default:
            break;
    }

});


export default Store;
