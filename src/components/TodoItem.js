'use strict';

import React from 'react/addons';
import classNames from 'classnames';

import debug from '../constants/DebugConstants';
import 'styles/TodoItem.scss';
debug('Loading %s...', 'TodoItem');


export default class TodoItem extends React.Component {
    static defaultProps = {
        preview: false,
        archived: false
    };
    state = {hover: false};

    mouseOver = () => {
        if (!this.props.preview) {
            this.setState({hover: true});
        }
    };

    mouseOut = () => {
        this.setState({hover: false});
    };


    render() {
        let closeButton = this.state.hover ? (
            <span className="glyphicon glyphicon-trash pull-right"
                  onClick={this.props.removeTodo}></span>) : null;

        let liClass = classNames({
            'TodoItem': true,
            'list-group-item': true,
            'checkbox': true,
            'hidden': (!this.props.value),
            'hover': this.state.hover,
            'disabled': this.props.preview
        });
        let valueClass = classNames({
            'todo-archived': this.props.archived
        });

        return (
            <li key={this.props.key}
                className={liClass}
                onMouseOver={this.mouseOver}
                onMouseLeave={this.mouseOut}>

                {closeButton}
                <label>
                    <input type="checkbox"
                           disabled={this.props.preview}
                           onChange={this.props.toggleArchive}
                           checked={this.props.archived} />
                    <span className={valueClass}>{this.props.value}</span>
                </label>
            </li>

        );
    }


}
