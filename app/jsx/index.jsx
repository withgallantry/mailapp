/* @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/App.jsx');
import configureStore from '../stores/stores/configStore.js';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('content'));