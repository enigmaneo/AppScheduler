import * as types from './actionTypes';
import scheduleApi from '../api/scheduleApi';

export function loadScheduleSuccess(schedule) {
    return { type: types.LOAD_SCHEDULE_SUCCESS, schedule };
}

export function saveScheduleSuccess(scheduleItem) {
    return { type: types.SAVE_SCHEDULE_SUCCESS, scheduleItem };
}

export function loadSchedule() {
    return function(dispatch) {
        return scheduleApi.getSchedule().then(schedule => {
            dispatch(loadScheduleSuccess(schedule));
        });
    };
}

export function saveScheduleItem(scheduleItem) {
    return function(dispatch) {
        return scheduleApi.saveScheduleItem(scheduleItem).then(schedule => {
            dispatch(saveScheduleSuccess(schedule));
        });
    };
}