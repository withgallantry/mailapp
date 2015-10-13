/* @jsx React.DOM */

import React from 'react';
import { connect } from 'react-redux';
import InboxView from '../views/InboxView.jsx';
import { request_mail,fetchMail } from '../../stores/actions';

let App = React.createClass({

    componentDidMount() {
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchMail("javascript"));
    },


    render: function () {
        return (
            <div>
                <InboxView></InboxView>
            </div>
        );
    }
});

function mapStateToProps(state) {
    const { mailByAccount } = state;
    const {
        isFetching,
        lastUpdated,
        items: mail
        } = mailByAccount["javascript"] || {
        isFetching: true,
        items: []
    };

    return {
        mail,
        isFetching,
        lastUpdated
    };
}

export default connect(mapStateToProps)(App);