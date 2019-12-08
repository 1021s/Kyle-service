/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import axios from 'axios';
import moxios from 'moxios';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/components/App';
import Heading from '../../client/components/Heading/Heading';
import House from '../../client/components/House/House';
import Footer from '../../client/components/Contact/Footer';
import ShareModal from '../../client/components/Heading/ShareModal';
import ContactModal from '../../client/components/Contact/ContactModal/ContactModal';


describe('App render suite', () => {
  let wrapper;

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
  });

  afterEach(() => {
    moxios.uninstall();
  });


  it('should render heading without throwing an error', () => {
    const heading = wrapper.contains(Heading);
    expect(heading).toBe(true);
  });

  it('should render house without throwing an error', () => {
    const house = wrapper.contains(House);
    expect(house).toBe(true);
  });

  it('should render footer without throwing an error', () => {
    const footer = wrapper.contains(Footer);
    expect(footer).toBe(true);
  });

  it('should render shareModal without throwing an error', () => {
    const shareModal = wrapper.contains(ShareModal);
    expect(shareModal).toBe(true);
  });

  it('should render contactModal without throwing an error', () => {
    const contactModal = wrapper.contains(ContactModal);
    expect(contactModal).toBe(true);
  });
});
