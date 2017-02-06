import React, { PropTypes } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, Modal } from 'react-bootstrap';

const ModalAddMeeting = ({scheduleHour, showModal, onSaveMeeting, closeModal, onTextChange}) => {
    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Meeting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <FormGroup>
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl
                            type="text"
                            value={scheduleHour.contact.name}
                            name="name"
                            onChange={onTextChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Phone Number:</ControlLabel>
                        <FormControl
                            type="tel"
                            value={scheduleHour.contact.phoneNumber}
                            name="phoneNumber"
                            onChange={onTextChange}
                        />
                    </FormGroup>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
                <Button className="btn-primary" onClick={onSaveMeeting}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

ModalAddMeeting.propTypes = {
    showModal: React.PropTypes.bool.isRequired,
    onSaveMeeting: React.PropTypes.func.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    scheduleHour: React.PropTypes.object.isRequired,
    onTextChange: React.PropTypes.func.isRequired
};

export default ModalAddMeeting;