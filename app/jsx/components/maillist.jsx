/* @jsx React.DOM */

import React from 'react';
import MailListItem from './MailListItem.jsx';
import {ListGroup} from 'react-bootstrap';

export default React.createClass({

    render: function() {
        return (
            <ListGroup>
                {this.props.mailItems.map(function(object, i){
                    return <MailListItem key={i} mailItem={object}></MailListItem>
                })}
            </ListGroup>
        );
    }
});