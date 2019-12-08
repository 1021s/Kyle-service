/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import Axios from 'axios';
import moxios from 'moxios';
import App from '../../client/components/App';
import Heading from '../../client/components/Heading/Heading';
import Save from '../../client/components/Heading/Save';
import Share from '../../client/components/Heading/Share';
import More from '../../client/components/Heading/More';

describe('', () => {
  let wrApper;
  let instance;
  let wrapper;

  beforeEach((done) => {
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
    wrApper = mount(<App />);
    moxios.wait(() => {
      instance = wrApper.instance();
      wrapper = mount(<Heading showModal={instance.showModal} />);
      done();
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render save button without throwing an error', () => {
    const save = wrapper.contains(Save);
    expect(save).toBe(true);
  });
  it('should render share without throwing an error', () => {
    const share = wrapper.contains(Share);
    expect(share).toBe(true);
  });

  it('should render more without throwing an error', () => {
    const more = wrapper.contains(More);
    expect(more).toBe(true);
  });
});
