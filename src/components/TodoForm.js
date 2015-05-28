'use strict';

import React from 'react/addons';
import classNames from 'classnames';

import debug from 'constants/DebugConstants';
import 'styles/TodoForm.scss';

debug('Loading %s...', 'TodoForm');


export default class TodoForm extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    addTodo(event) {

        if (event.key === 'Enter') {
            this.props.onAddTodo()
        }
    }

    render() {
        let archiveAllClass = classNames({
            'glyphicon': true,
            'glyphicon-ok': !this.props.allAreArchived,
            'text-success': !this.props.allAreArchived,
            'glyphicon-repeat': this.props.allAreArchived,
            'text-muted': this.props.allAreArchived
        });
        return (
            <div className="input-group TodoForm">
                            <span className="input-group-btn">
                            <button className="btn btn-default"
                                    type="button"
                                    onClick={this.props.toggleAll}>
                                <span className={archiveAllClass}></span>
                            </button>
                            </span>

                <input type="text"
                       className="form-control"
                       value={this.props.value}
                       onChange={this.props.onChange}
                       onKeyPress={this.addTodo.bind(this)} />
            </div>
        );
    }

}


