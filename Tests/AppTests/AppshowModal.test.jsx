/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/components/App';

describe('', () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();

  it('should change state of App shareModal', () => {
    expect(wrapper.state('shareModal')).toBe(false);
    instance.showModal('shareModal');
    expect(wrapper.state('shareModal')).toBe(true);
    instance.showModal('shareModal');
    expect(wrapper.state('shareModal')).toBe(false);
  });

  it('should change state of App contactModal', () => {
    expect(wrapper.state('contactModal')).toBe(false);
    instance.showModal('contactModal');
    expect(wrapper.state('contactModal')).toBe(true);
    instance.showModal('contactModal');
    expect(wrapper.state('contactModal')).toBe(false);
  });
});
