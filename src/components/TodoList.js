'use strict';

import React from 'react/addons';
import classNames from 'classnames';

import TodoItem from 'components/TodoItem';
import debug from 'constants/DebugConstants';

import 'styles/TodoList.scss';
debug('Loading %s...', 'TodoList');


export default class TodoList extends React.Component {
    filteredTodos = () => {
        let returnAll = this.props.filter === 'all';
        let archiveFilter = this.props.filter === 'archived';

        return this.props.todos.filter((todo) => {
            if (returnAll) return true;

            return todo.archived === archiveFilter;
        })
    };

    render() {
        let todosList = this.filteredTodos();


        let todos = todosList.map((todo, index)=> {
            return (
                <TodoItem key={todo._id}
                          value={todo.text}
                          archived={todo.archived}
                          toggleArchive={this.props.toggleArchive.bind(this, todo, index)}
                          removeTodo={this.props.removeTodo.bind(index)} />
            );
        });

        let inputText = (<TodoItem value={this.props.inputText}
                                   preview="true" />);

        let ulClasses = classNames({
            'TodoList': true,
            'list-group': true,
            'hidden': !todosList.length
        });
        return (
            <ul className={ulClasses}>

                {todos}
                {inputText}
            </ul>
        );
    }
}


