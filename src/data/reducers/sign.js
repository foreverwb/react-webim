export default function signReducer(state = {
    signState: 0,
}, action) {
    switch(state) {
        case 'LOGIN_START':
            return Object.assign({}, state, {
                signState: action.payload.state
            });
        default:
            return state;
    }
}