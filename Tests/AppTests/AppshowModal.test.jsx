/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import moxios from 'moxios';
import axios from 'axios';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/components/App';

describe('', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    moxios.install();
    window.history.pushState({}, 'App render suite', '/000/');
    moxios.stubRequest('/api/listings/000', {
      status: 200,
      response: [
        {
          Details: { Room_count: 4, Bathroom_count: 2, Square_footage: 1075 },
          Address: {
            House_number: 7006, Street_number: 102, Street: 'Boulevard W', City: 'Seattle', State: 'WA', ZIP_code: 98153,
          },
          _id: '5de570f7a88aff0b7f572305',
          Listing_id: '000',
          Price: 671635,
          Zestimate: true,
          Agent: true,
          Saved: false,
          __v: 0,
        },
      ],
    });
    wrapper = mount(<App />);
    instance = wrapper.instance();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  // const wrapper = mount(<App />);
  // const instance = wrapper.instance();

  it('should change state of App shareModal', () => {
    expect(wrapper.state('shareModal')).toBe(false);
    instance.showModal('shareModal');
    expect(wrapper.state('shareModal')).toBe(true);
    instance.showModal('shareModal');
    expect(wrapper.state('shareModal')).toBe(false);
  });

  it('should change state of App contactModal', () => {
    expect(wrapper.state('contactModal')).toBe(false);
    instance.showModal('contactModal');
    expect(wrapper.state('contactModal')).toBe(true);
    instance.showModal('contactModal');
    expect(wrapper.state('contactModal')).toBe(false);
  });
});
