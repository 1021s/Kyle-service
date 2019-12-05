/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../client/components/App';
import Share from '../../client/components/Heading/Share';
import ShareModal from '../../client/components/Heading/ShareModal';
import Close from '../../client/components/Heading/Close';
import Send from '../../client/components/Heading/Send';

describe('Share modal test suite', () => {
  let wrapper; let app; let wrapperModal; let clickedModal;
  let modal; let empty; let close; let share; let send;
  beforeEach(() => {
    wrapper = mount(<App />);
    app = wrapper.instance();
    wrapperModal = mount(<ShareModal show showModal={app.showModal} />);
    clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
    modal = clickedModal.instance();
    empty = mount(<ShareModal show={false} showModal={app.showModal} />);
    share = mount(<Share showModal={app.showModal} />);
    close = mount(<Close close={modal.hideModal} />);
    send = shallow(<Send close={modal.shareHouse} />);
  });

  it('should not render the modal when show is false', () => {
    expect(empty.contains('div')).toBe(false);
  });

  it('should render the modal when show is true', () => {
    expect(wrapperModal.find('div').length).not.toBe(0);
  });

  it('should close the modal when close button is clicked', () => {
    expect(wrapper.state('shareModal')).toBe(false);
    expect(clickedModal.contains('div')).toBe(false);
    share.find('button').simulate('click');

    clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
    expect(clickedModal.find('div').length).not.toBe(0);
    expect(wrapper.state('shareModal')).toBe(true);

    close.find('button').simulate('click');
    clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
    expect(clickedModal.contains('div')).toBe(false);
  });

  it('should close the modal when the send button is clicked', () => {
    expect(wrapper.state('shareModal')).toBe(false);
    expect(clickedModal.contains('div')).toBe(false);
    share.find('button').simulate('click');

    clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
    expect(clickedModal.find('div').length).not.toBe(0);
    expect(wrapper.state('shareModal')).toBe(true);

    send.find('btn').simulate('click', { preventDefault() {} });
    clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
    expect(clickedModal.contains('div')).toBe(false);
  });
});
