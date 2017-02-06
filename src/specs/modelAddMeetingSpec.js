import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ModalAddMeeting from '../components/scheduler/ModalAddMeeting';

function setup(saving) {
    const props = {
        scheduleHour: { contact: {} }, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<ModalAddMeeting {...props} />);
}

describe('ModalAddMeeting', () => {
    it('renders a form form', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
    });
});