/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import House from '../../client/components/House/House';
import Address from '../../client/components/House/Address';
import Details from '../../client/components/House/Details';
import Zestimate from '../../client/components/House/Zestimate';
import Payment from '../../client/components/House/Payment';
import Orange from '../../client/components/House/Orange';

describe('', () => {
  const wrApper = mount(<App />);
  const wrapper = mount(<House house={wrApper.state('house')} />);

  it('should render Address without throwing an error', () => {
    const address = wrapper.contains(Address);
    expect(address).toBe(true);
  });
  it('should render details without throwing an error', () => {
    const details = wrapper.contains(Details);
    expect(details).toBe(true);
  });

  it('should render zestimate without throwing an error', () => {
    const zestimate = wrapper.contains(Zestimate);
    expect(zestimate).toBe(true);
  });

  it('should render payment without throwing an error', () => {
    const payment = wrapper.contains(Payment);
    expect(payment).toBe(true);
  });

  it('should render orange without throwing an error', () => {
    const orange = wrapper.contains(Orange);
    expect(orange).toBe(true);
  });
});
