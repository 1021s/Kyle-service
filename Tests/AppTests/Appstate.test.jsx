/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import Axios from 'axios';
import moxios from 'moxios';
import { mount } from 'enzyme';
import App from '../../client/components/App';


describe('App state suite', () => {
  let wrapper;
  let state;

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
    wrapper = mount(<App />);
    moxios.wait(() => {
      state = wrapper.state();
      done();
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should have state', () => {
    console.log(state);
    expect(state).not.toBe(undefined);
    expect(state.length).not.toBe(0);
  });
  it('should have house', () => {
    const { house } = state;
    expect(typeof house).toBe('object');
    expect(Object.keys(house)[0]).toBe('Details');
  });
  it('should have ShareModal', () => {
    const { shareModal } = state;
    expect(typeof shareModal).toBe('boolean');
    expect(shareModal).toBe(false);
  });
});
