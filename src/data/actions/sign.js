import {createAction, REG_STATE_CHANGE} from '../actions/actiontypes';

// REG_START/REG_SUCCESS/REG_ERROR 1 2 3
export const regState = createAction(REG_STATE_CHANGE, 'state');
export function reg(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            let onSuccess = options.success;
            let onError = options.error;
            options.success = function () {
                onSuccess && onSuccess();
                dispatch(regState(2))
                resolve();
            }
            options.error = function (e) {
                onError && onError();
                dispatch(regState(3))
                reject();
            };
            dispatch(regState(1));
            sdk.conn.registerUser(options);
        });
    }
}

export function login(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            options.success = (token) => {
                resolve(token);

            }
            options.error = (error) => {
                reject(error);
            }
            sdk.conn.open(options);
        });
    }
}