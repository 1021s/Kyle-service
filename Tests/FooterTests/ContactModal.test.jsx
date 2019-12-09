/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Axioss from 'axios';
import App from '../../client/components/App';
import Contact from '../../client/components/Contact/Contact';
import ContactModal from '../../client/components/Contact/ContactModal/ContactModal';
import Close from '../../client/components/Heading/Close';

describe('Contact modal test suite', () => {
  let wrapper; let app; let wrapperModal; let clickedModal;
  let modal; let empty; let close; let contact;

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
      app = wrapper.instance();
      wrapperModal = mount(<ContactModal show showModal={app.showModal} />);
      clickedModal = mount(<ContactModal show={wrapper.state('contactModal')} showModal={app.showModal} />);
      modal = clickedModal.instance();
      empty = mount(<ContactModal show={false} showModal={app.showModal} />);
      contact = mount(<Contact showModal={app.showModal} />);
      close = mount(<Close close={modal.hideModal} />);
      done();
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should not render the modal when show is false', () => {
    expect(empty.contains('div')).toBe(false);
  });
  it('should render the modal when show is true', () => {
    expect(wrapperModal.find('div').length).not.toBe(0);
  });
  it('should close the modal when close button is clicked', () => {
    expect(wrapper.state('contactModal')).toBe(false);
    expect(clickedModal.contains('div')).toBe(false);
    contact.find('button').simulate('click');

    clickedModal = mount(<ContactModal show={wrapper.state('contactModal')} showModal={app.showModal} />);
    expect(clickedModal.find('div').length).not.toBe(0);
    expect(wrapper.state('contactModal')).toBe(true);

    close.find('button').simulate('click');
    clickedModal = mount(<ContactModal show={wrapper.state('contactModal')} showModal={app.showModal} />);
    expect(clickedModal.contains('div')).toBe(false);
  });
});
