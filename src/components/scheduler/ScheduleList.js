import React from 'react';
import utils from '../../utils/utils';

const ScheduleList = ({schedule, showModalClick, deleteAppointment}) => {
    const isHourFilled =  (hour) => {
        if (utils.isNullOrUndefined(hour.contact))  {
            return false;
        }

        if (hour.contact.name === '' || hour.contact.phoneNumber === '') {
            return false;
        }

        return true;
    };
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>
                    Time
                </th>
                <th>
                    Appointment
                </th>
            </tr>
            </thead>
            <tbody>
            {schedule.map(scheduleHour => {
                return (
                    <tr key={scheduleHour.id} className={isHourFilled(scheduleHour) ? 'filled-slot' : ''} data-schedule-id={scheduleHour.id} onClick={showModalClick}>
                        <td>
                            {scheduleHour.time}
                        </td>
                        <td>
                            {isHourFilled(scheduleHour) &&
                                <div>
                                    <span><b>Name:</b> {scheduleHour.contact.name}</span> &nbsp;&nbsp;<span><b>Number:</b> {scheduleHour.contact.phoneNumber}</span>
                                    <i
                                        className="glyphicon glyphicon-remove pull-right margin-right-5 cursor-hand"
                                        data-schedule-id={scheduleHour.id}
                                        onClick={deleteAppointment}>
                                    </i>
                                </div>
                            }
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

ScheduleList.propTypes = {
    schedule: React.PropTypes.array.isRequired,
    showModalClick: React.PropTypes.func.isRequired,
    deleteAppointment: React.PropTypes.func.isRequired
};

export default ScheduleList;