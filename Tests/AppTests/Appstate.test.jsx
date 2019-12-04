/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/components/App';


describe('App state suite', () => {
  const wrapper = mount(<App />);
  const state = wrapper.state();

  it('should have state', () => {
    expect(state).not.toBe(undefined);
    expect(state.length).not.toBe(0);
  });
  it('should have house', () => {
    const { house } = state;
    expect(typeof house).toBe('object');
    expect(Object.keys(house)[0]).toBe('Details');
  });
  it('should have ShareModal', () => {
    const { shareModal } = state;
    expect(typeof shareModal).toBe('boolean');
    expect(shareModal).toBe(false);
  });
});
