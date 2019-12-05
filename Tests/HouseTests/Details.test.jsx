/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import Details from '../../client/components/House/Details';


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

describe('', () => {
  const empty = mount(<Details house={{}} />);
  const full = mount(<Details house={house} />);

  it('should render nothing when not passed a house', () => {
    expect(empty.find('div').length).toBe(0);
  });

  it('should render details when given a house', () => {
    expect(full.find('div').length).toBe(2);
  });
});
