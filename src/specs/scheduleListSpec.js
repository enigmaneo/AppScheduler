import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ScheduleList from '../components/scheduler/ScheduleList';

function setup() {
    const props = {
        schedule: [
            { id: 2, contact: { name: "sfsdf", phoneNumber: "234242" }},
            { id: 3, contact: { name: "", phoneNumber: "" }}
        ],
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<ScheduleList {...props} />);
}

describe('ScheduleList', () => {
    it('should render 3 rows', () => {
        const wrapper = setup(false);
        expect(wrapper.find('tr').length).toBe(3);
    });

    it('should highlight row 2 only', () => {
        const wrapper = setup();
        expect(wrapper.find('.filled-slot').length).toEqual(1);
    });
});