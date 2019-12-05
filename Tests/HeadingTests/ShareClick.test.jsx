/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import Share from '../../client/components/Heading/Share';
import ShareModal from '../../client/components/Heading/ShareModal';

describe('', () => {
  let wrApp; let app; let wrapper; let wrapperModal; let modal;
  beforeEach(() => {
    wrApp = mount(<App />);
    app = wrApp.instance();
    wrapper = mount(<Share showModal={app.showModal} />);
    wrapperModal = mount(<ShareModal show={wrApp.state('shareModal')} />);
    modal = wrapperModal.instance();
  });

  it('should update state in App on click', () => {
    expect(wrApp.state('shareModal')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrApp.state('shareModal')).toBe(true);
  });
  it('should update state in App on click', () => {
    expect(wrApp.state('shareModal')).toBe(false);
    expect(modal.props.show).toBe(false);

    wrapper.find('button').simulate('click');
    expect(wrApp.state('shareModal')).toBe(true);

    // new instance check
    wrapperModal = mount(<ShareModal show={wrApp.state('shareModal')} />);
    modal = wrapperModal.instance();
    expect(modal.props.show).toBe(true);
  });
});
