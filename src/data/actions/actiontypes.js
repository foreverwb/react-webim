export function createAction(type, ...actionArgs) {
    return (...args) => {
        let action = {
            type: type,
            payload: {}
        };
        actionArgs.forEach((arg, idx) => {
            action.payload[actionArgs[idx]] = args[idx];
        });
        return action;
    }
}

export const REG_STATE_CHANGE = 'reg_state_change';