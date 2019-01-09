import expect from 'expect';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import CourseForm from './CourseForm';

// setup enzyme
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
