/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import Axios from 'axios';
import moxios from 'moxios';
import App from '../../client/components/App';
import House from '../../client/components/House/House';
import Address from '../../client/components/House/Address';
import Details from '../../client/components/House/Details';
import Zestimate from '../../client/components/House/Zestimate';
import Payment from '../../client/components/House/Payment';
import Orange from '../../client/components/House/Orange';

describe('', () => {
  let wrApper;
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
      wrapper = mount(<House house={wrApper.state('house')} />);
      done();
    });
  });

  afterEach((done) => {
    moxios.uninstall();
    done();
  });

  it('should render Address without throwing an error', () => {
    const address = wrapper.contains(Address);
    expect(address).toBe(true);
  });
  it('should render details without throwing an error', () => {
    const details = wrapper.contains(Details);
    expect(details).toBe(true);
  });

  it('should render zestimate without throwing an error', () => {
    const zestimate = wrapper.contains(Zestimate);
    expect(zestimate).toBe(true);
  });

  it('should render payment without throwing an error', () => {
    const payment = wrapper.contains(Payment);
    expect(payment).toBe(true);
  });

  it('should render orange without throwing an error', () => {
    const orange = wrapper.contains(Orange);
    expect(orange).toBe(true);
  });
});
