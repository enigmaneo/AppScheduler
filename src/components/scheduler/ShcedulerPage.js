import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import utils from '../../utils/utils';
import ScheduleList from './ScheduleList';
import ModalAddMeeting from './ModalAddMeeting';
import * as eventActions from '../../actions/eventActions';

class SchedulerPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            schedule: Object.assign({}, props.schedule),
            showModal: false,
            selectedSchedule: {
                contact: {
                    name: '',
                    phoneNumber: ''
                }
            }
        };

        this.showModalClick = this.showModalClick.bind(this);
        this.closeModalClick = this.closeModalClick.bind(this);
        this.saveAppointment = this.saveAppointment.bind(this);
        this.updateSelectedScheduleState = this.updateSelectedScheduleState.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    saveAppointment() {
        this.props.actions.saveScheduleItem(this.state.selectedSchedule)
            .then(this.closeModalClick());
    }
    deleteAppointment(event) {
        event.stopPropagation();
        const appointmentIdToDelete = parseInt(event.currentTarget.getAttribute("data-schedule-id"));

        const selectedAppointment = this.props.schedule.filter((s) => {
            return s.id === appointmentIdToDelete;
        })[0];

        const appointmentToDelete = Object.assign({}, selectedAppointment);
        appointmentToDelete.contact = { name: "", phoneNumber: "" };
        this.props.actions.saveScheduleItem(appointmentToDelete);
    }

    showModalClick(event) {
        const scheduleId = parseInt(event.currentTarget.getAttribute("data-schedule-id"));
        const selectedSchedule = this.props.schedule.filter((s) => {
            return s.id === scheduleId;
        })[0];

        if (utils.isNullOrUndefined(selectedSchedule.contact)) {
            selectedSchedule.contact = {
                name: '',
                phoneNumber: ''
            };
        }
        const newSchedule = Object.assign({}, selectedSchedule);
        newSchedule.contact = Object.assign({}, selectedSchedule.contact);

        this.setState({
            selectedSchedule: newSchedule,
            showModal: true
        });
    }

    closeModalClick() {
        this.setState({ showModal: false });
    }

    updateSelectedScheduleState(event) {
        const field = event.target.name;
        let schedule = this.state.selectedSchedule;
        schedule.contact[field] = event.target.value;
        return this.setState({selectedSchedule: schedule});
    }

    render() {
        const schedule = this.props.schedule;
        return (
            <div>
                <h1>Scheduler Page</h1>
                <ScheduleList
                    schedule={schedule}
                    showModalClick={this.showModalClick}
                    deleteAppointment={this.deleteAppointment}
                />

                <ModalAddMeeting
                    scheduleHour={this.state.selectedSchedule}
                    showModal={this.state.showModal}
                    onSaveMeeting={this.saveAppointment}
                    closeModal={this.closeModalClick}
                    onTextChange={this.updateSelectedScheduleState}
                />
            </div>
        );
    }
}
SchedulerPage.propTypes = {
    schedule: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        schedule: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerPage);