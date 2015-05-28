'use strict';

import React from 'react/addons';

const CSSTransitionGroup = React.addons.CSSTransitionGroup;
import Actions from 'actions/TodoActionCreators';
import TodoStore from 'stores/TodoStore';
import TodoForm from 'components/TodoForm';
import TodoNav from 'components/TodoNav';
import TodoList from 'components/TodoList';
import debug from 'constants/DebugConstants';

import 'styles/TodoApp.scss';

debug('Loading %s...', 'TodoApp');

class TodoApp extends React.Component {
    static propTypes = {};

    state = TodoStore.getState();

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);

    }

    componentWillMount() {
        Actions.populateData();
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    updateText(event) {
        Actions.updateText(event.target.value);
    }

    getFilter() {
        switch (this.props.filter) {
            case 'archived':
                return 'archived';
            case 'active':
                return 'active';
            default:
                return 'all';
        }

    }

    render() {
        debug('Filter:', this.props.filter);

        debug("TodoApp State: ", this.state.todos, this.state.inputText);

        return (

            <div className="row TodoApp">
                <div className="col-md-6 col-sm-8 col-xs-12">

                    <div className="page-header">
                        <h1>Todo App</h1>
                    </div>

                    <div className="well well-lg"
                         key="TodoApp">
                        <TodoList todos={this.state.todos}
                                  filter={this.getFilter()}
                                  toggleArchive={Actions.toggleArchive}
                                  removeTodo={Actions.removeTodo}
                                  inputText={this.state.inputText} />

                        <TodoForm toggleAll={Actions.toggleAll}
                                  value={this.state.inputText}
                                  onChange={this.updateText}
                                  onAddTodo={Actions.addTodo}
                                  allAreArchived={this.state.allAreArchived} />

                        <TodoNav filter={this.props.filter}
                                 removeAll={Actions.removeAll}
                                 removeArchived={Actions.removeArchived} />

                    </div>

                </div>
            </div>


        );
    }

    _onChange = () => {
        this.setState(TodoStore.getState());
    }
}

export default TodoApp;

