'use strict';

import React from 'react/addons';
import {Link} from 'react-router';

import Actions from 'actions/TodoActionCreators';
import TodoStore from 'stores/TodoStore';
import TodoItem from 'components/TodoItem';
import TodoForm from 'components/TodoForm';
import debug from 'constants/DebugConstants';
import 'normalize.css';
import 'styles/TodoApp.scss';

debug('Loading %s...', 'TodoApp');
const ReactTransitionGroup = React.addons.TransitionGroup;


class TodoApp extends React.Component {
    static propTypes = {};
    state = TodoStore.getState();


    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);

    }


    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }


    // componentWillMount() {}
    // shouldComponentUpdate() {}
    // componentDidUpdate() {}

    updateText(event) {
        debug('updateText', event);
        Actions.updateText(event.target.value);
    }

    addTodo() {
        Actions.addTodo();
    }

    removeTodo(index) {
        Actions.removeTodo(index);
    }

    toggleArchive(todo, index) {
        debug('ToggleArchive: ', todo, index);
        Actions.toggleArchive(todo, index);
    }

    toggleAll() {
        Actions.toggleAll();
    }

    render() {
        debug('Params:', this.props);
        debug("TodoApp State: ", this.state.todos, this.state.inputText);
        let todos = this.state.todos.map((todo, index)=> {
            let toggleArchive = this.toggleArchive.bind(this, todo, index);
            let removeTodo = this.removeTodo.bind(this, index);
            return (
                <TodoItem key={todo._id}
                          value={todo.text}
                          archived={todo.archived}
                          toggleArchive={toggleArchive}
                          removeTodo={removeTodo} />
            );
        });

        let inputText = (<TodoItem value={this.state.inputText}
                                   preview="true" />);

        return (
            <div className='container-fluid TodoApp'>
                <ReactTransitionGroup transitionName="fade">
                    <div className="row">
                        <div className="col-md-6 col-sm-8">
                            <div className="page-header">
                                <h1>Todo App</h1>
                            </div>
                            <div className="well well-lg">
                                <ul className="list-group">

                                    {todos}
                                    {inputText}
                                </ul>

                                <TodoForm toggleAll={this.toggleAll}
                                          value={this.state.inputText}
                                          onChange={this.updateText}
                                          onAddTodo={this.addTodo}
                                          allAreArchived={this.state.allAreArchived} />
                                <ul className="nav nav-pills">
                                    <li role="presentation"
                                        className="active">
                                        <Link to="all">All</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to="archived">Archived</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to="active">Active</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ReactTransitionGroup>
            </div>

        );
    }

    _onChange = () => {
        this.setState(TodoStore.getState());
    }
}

export default TodoApp;

