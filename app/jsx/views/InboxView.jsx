/* @jsx React.DOM */

import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import MailList from '../components/MailList.jsx';

export default React.createClass({


    fakeMail : function() {
      return [{
          subject : 'Big Things',
          body : 'This is the big old body'
      },{
          subject : 'Medium Things',
          body : 'This is the medium old body'
      },{
          subject : 'Small Things',
          body : 'This is the small old body'
      },]
    },

    render: function () {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col className="no-padding" xs={4}><MailList mailItems={this.fakeMail()}></MailList></Col>
                        <Col xs={8}>Preview</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});