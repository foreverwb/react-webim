import { SET_CURRENT_SESSION, SET_ROSTERS, createAction} from '../actions/actiontypes';

export let setCurrentSession = createAction(SET_CURRENT_SESSION, 'session');

export let setRosters = createAction(SET_ROSTERS, 'rosters')

export function getRosters() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            sdk.conn.getRoster({
                success: (rosters) => {
                    rosters = rosters.filter((roster) => {
                        return roster.subscription === 'both';
                    });
                    dispatch(setRosters(rosters));
                    console.log(rosters);
                    resolve(rosters);
                },
                error: (e) => {
                    reject(e);
                }
            });
        })
    }
}