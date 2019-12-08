/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import Axios from 'axios';
import moxios from 'moxios';
import App from '../../client/components/App';
import Tour from '../../client/components/Contact/Tour';
import TourModal from '../../client/components/Contact/TourModal/TourModal';

describe('Tour button test suite', () => {
  let wrApp; let app; let wrapper; let wrapperModal; let modal;

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

    wrApp = mount(<App />);
    moxios.wait(() => {
      app = wrApp.instance();
      wrapper = mount(<Tour showModal={app.showModal} />);
      wrapperModal = mount(<TourModal show={wrApp.state('tourModal')} showModal={app.showModal} />);
      modal = wrapperModal.instance();
      done();
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should update state in App on click', () => {
    expect(wrApp.state('tourModal')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrApp.state('tourModal')).toBe(true);
  });
  it('should update props in TourModal on click', () => {
    expect(wrApp.state('tourModal')).toBe(false);
    expect(modal.props.show).toBe(false);

    wrapper.find('button').simulate('click');
    expect(wrApp.state('tourModal')).toBe(true);

    // new instance check
    wrapperModal = mount(<TourModal show={wrApp.state('tourModal')} showModal={app.showModal} />);
    modal = wrapperModal.instance();
    expect(modal.props.show).toBe(true);
  });
});
