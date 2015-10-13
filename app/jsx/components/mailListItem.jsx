/* @jsx React.DOM */
import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

export default React.createClass({
    render: function() {
        return (
            <ListGroupItem header={this.props.mailItem.subject}>{this.props.mailItem.body}</ListGroupItem>
        );
    }
});