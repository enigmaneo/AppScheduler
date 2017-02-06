import * as types from '../actions/actionTypes';
export default function eventReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_SCHEDULE_SUCCESS:
            return action.schedule;

        case types.SAVE_SCHEDULE_SUCCESS:
            return [
                ...state.filter(scheduleItem => scheduleItem.id !== action.scheduleItem.id),
                Object.assign({}, action.scheduleItem)
            ].sort((a, b) => {
                return a.id - b.id;
            });

        default:
            return state;
    }
}