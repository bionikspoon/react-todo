'use strict';

import React from 'react/addons';
import {Link} from 'react-router';
import debug from 'constants/DebugConstants';

import 'styles/TodoNav.scss';
debug('Loading %s...', 'TodoNav');

export default class TodoNav extends React.Component {
    static propTypes = {};
    static defaultProps = {};


    removeAll(event) {
        event.preventDefault();
        this.props.removeAll();
    }

    removeArchived(event) {
        debug('RemoveArchived called', event);
        event.preventDefault();
        this.props.removeArchived();
    }

    render() {
        return (
            <ul className="nav nav-pills TodoNav">
                <li role="presentation"
                    className={this.props.filter === 'all' ? 'active':''}>
                    <Link to="all">All</Link>
                </li>
                <li role="presentation"
                    className={this.props.filter === 'archived' ? 'active':''}>
                    <Link to="archived">Archived</Link>
                </li>
                <li role="presentation"
                    className={this.props.filter === 'active' ? 'active':''}>
                    <Link to="active">Active</Link>
                </li>
                <li role="presentation"
                    className='pull-right'>
                    <a className='remove-all'
                       href='#'
                       onClick={this.removeAll.bind(this)}>Remove All</a>
                </li>
                <li role="presentation"
                    className='pull-right'>
                    <a className='remove-archived'
                       href='#'
                       onClick={this.removeArchived.bind(this)}>Remove
                                                                Archived</a>
                </li>
            </ul>
        );
    }
}


