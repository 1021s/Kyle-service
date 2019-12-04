/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/components/App';
import Heading from '../../client/components/Heading/Heading';
import House from '../../client/components/House/House';
import Footer from '../../client/components/Contact/Footer';
import ShareModal from '../../client/components/Heading/ShareModal';
import ContactModal from '../../client/components/Contact/ContactModal/ContactModal';


describe('App render suite', () => {
  const wrapper = mount(<App />);

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
