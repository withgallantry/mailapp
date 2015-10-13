import { combineReducers } from 'redux';
import {
    REQUEST_MAIL, RECEIVE_MAIL
} from '../actions';

function mail(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_MAIL:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_MAIL:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function mailByAccount(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MAIL:
        case REQUEST_MAIL:
            return Object.assign({}, state, {
                [action.account]: mail(state[action.account], action)
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mailByAccount
});

export default rootReducer;
