/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import Contact from '../../client/components/Contact/Contact';
import ContactModal from '../../client/components/Contact/ContactModal/ContactModal';

describe('', () => {
  let wrApp; let app; let wrapper; let wrapperModal; let modal;
  beforeEach(() => {
    wrApp = mount(<App />);
    app = wrApp.instance();
    wrapper = mount(<Contact showModal={app.showModal} />);
    wrapperModal = mount(<ContactModal show={wrApp.state('contactModal')} />);
    modal = wrapperModal.instance();
  });

  it('should update state in App on click', () => {
    expect(wrApp.state('contactModal')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrApp.state('contactModal')).toBe(true);
  });
  it('should update props in ContactModal on click', () => {
    expect(wrApp.state('contactModal')).toBe(false);
    expect(modal.props.show).toBe(false);

    wrapper.find('button').simulate('click');
    expect(wrApp.state('contactModal')).toBe(true);

    // new instance check
    wrapperModal = mount(<ContactModal show={wrApp.state('contactModal')} />);
    modal = wrapperModal.instance();
    expect(modal.props.show).toBe(true);
  });
});
