'use strict';
import data from 'json!../../../src/todos.json';

describe('TodoStore', function () {
    let store;
    let actions;

    beforeEach(()=> {
        store = require('stores/TodoStore');
        actions = require('actions/TodoActionCreators');
    });

    it('should be defined', () => {
        expect(store).toBeDefined();
    });

    it('should have an empty todos array', () => {
        expect(store._todos).toBeDefined();
        expect(store._todos.length).toBe(0);
    });

    it('should have an empty inputText field', () => {
        expect(store._inputText).toBeUndefined();
        expect(store._inputText).toBeFalsy();
    });

    it('text should update', () => {
        actions.updateText('Test');
        expect(store._inputText).toBe('Test');
    });

    describe('After populating the data', () => {
        beforeEach(() => {
            actions.populateData()
        });

        it('Todos should be loaded', () => {
            expect(store._todos.length).toBe(3);
        });

        describe('Adding a todo', () => {
            beforeEach(() => {
                actions.addTodo('Test');
            });

            it('Adds to the todo list', () => {
                expect(store._todos.length).toBe(4);
            });

            it('Populates with input text', () => {
                expect(store._todos[3].text).toBe('Test');
            });

            it('Has a default archived value of false', () => {
                expect(store._todos[3].archived).toBeFalsy();
            });
        });

        it('Can archive individual todos', () => {
            expect(store._todos[1].archived).toBeFalsy();
            actions.toggleArchive(1);
            expect(store._todos[1].archived).toBeTruthy();
        });

        describe('Toggling all archives', () => {
            it('sets all to archived', () => {
                store._todos.forEach((todo) => {
                    //expect(todo.archived).toBeFalsy();
                })
            });

        });
    });

});
