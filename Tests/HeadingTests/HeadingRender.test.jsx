/* eslint-env jest */
/* eslint-env node */
import React from 'react';
import { mount } from 'enzyme';
import Heading from '../../client/components/Heading/Heading';
import Save from '../../client/components/Heading/Save';
import Share from '../../client/components/Heading/Share';
import More from '../../client/components/Heading/More';

describe('', () => {
  const wrapper = mount(<Heading />);

  it('should render save button without throwing an error', () => {
    const save = wrapper.contains(Save);
    expect(save).toBe(true);
  });
  it('should render share without throwing an error', () => {
    const share = wrapper.contains(Share);
    expect(share).toBe(true);
  });

  it('should render more without throwing an error', () => {
    const more = wrapper.contains(More);
    expect(more).toBe(true);
  });
});
