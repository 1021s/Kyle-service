/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import Tour from '../../client/components/Contact/Tour';
import TourModal from '../../client/components/Contact/TourModal/TourModal';

describe('', () => {
  let wrApp; let app; let wrapper; let wrapperModal; let modal;
  beforeEach(() => {
    wrApp = mount(<App />);
    app = wrApp.instance();
    wrapper = mount(<Tour showModal={app.showModal} />);
    wrapperModal = mount(<TourModal show={wrApp.state('tourModal')} showModal={app.showModal} />);
    modal = wrapperModal.instance();
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
