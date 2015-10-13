export const REQUEST_MAIL = 'REQUEST_MAIL';
export const RECEIVE_MAIL = 'RECEIVE_MAIL';

export function request_mail(account) {
    return {
        type: REQUEST_MAIL,
        account
    };
}

function fetchMailItems(account) {
    return dispatch => {
        dispatch(request_mail(account));
        return fetch(`http://www.reddit.com/r/${account}.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveMail(account, json)));
    };
}

function receiveMail(account, json) {
    return {
        type: RECEIVE_MAIL,
        account: account,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}

export function fetchMail(reddit) {
    return (dispatch, getState) => {
            return dispatch(fetchMailItems(reddit));
    };
}
