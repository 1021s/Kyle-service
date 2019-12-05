/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import Contact from '../../client/components/Contact/Contact';
import ContactModal from '../../client/components/Contact/ContactModal/ContactModal';
import Close from '../../client/components/Heading/Close';

describe('Contact modal test suite', () => {
  let wrapper; let app; let wrapperModal; let clickedModal;
  let modal; let empty; let close; let contact;
  beforeEach(() => {
    wrapper = mount(<App />);
    app = wrapper.instance();
    wrapperModal = mount(<ContactModal show showModal={app.showModal} />);
    clickedModal = mount(<ContactModal show={wrapper.state('contactModal')} showModal={app.showModal} />);
    modal = clickedModal.instance();
    empty = mount(<ContactModal show={false} showModal={app.showModal} />);
    contact = mount(<Contact showModal={app.showModal} />);
    close = mount(<Close close={modal.hideModal} />);
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
