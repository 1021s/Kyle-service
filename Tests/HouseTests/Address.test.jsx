/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/components/App';
import Address from '../../client/components/House/Address';


const house = {
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
};

describe('Addresss render test suite', () => {
  const empty = mount(<Address house={{}} />);
  const full = mount(<Address house={house} />);

  it('should render null when props are empty without throwing an error', () => {
    expect(empty.contains('div')).toBe(false);
  });

  it('should render properly when props are passed', () => {
    expect(full.find('div').length).toBe(1);
  });
});
