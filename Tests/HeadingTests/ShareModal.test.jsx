/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Axios from 'axios';
import moxios from 'moxios';
import App from '../../client/components/App';
import Share from '../../client/components/Heading/Share';
import ShareModal from '../../client/components/Heading/ShareModal';
import Close from '../../client/components/Heading/Close';
import Send from '../../client/components/Heading/Send';

describe('Share modal test suite', () => {
  let wrapper; let app; let wrapperModal; let clickedModal;
  let modal; let empty; let close; let share; let send;

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
      wrapperModal = mount(<ShareModal show showModal={app.showModal} />);
      clickedModal = mount(<ShareModal show={wrapper.state('shareModal')} showModal={app.showModal} />);
      modal = clickedModal.instance();
      empty = mount(<ShareModal show={false} showModal={app.showModal} />);
      share = mount(<Share showModal={app.showModal} />);
      close = mount(<Close close={modal.hideModal} />);
      send = shallow(<Send close={modal.shareHouse} />);
      done();
    });
  });

  afterEach((done) => {
    moxios.uninstall();
    done();
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
