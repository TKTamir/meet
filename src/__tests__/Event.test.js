import React from 'react';
import { shallow } from 'enzyme';

import { mockData } from '../mock-data';

import Event from '../Event';

describe('<Event /> component', () => {
  let event;
  let EventWrapper;

  beforeAll(() => {
    //Fix mockData dateTime problem by targetting the first iteration
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });
  test('event element rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  test('event title element renderd', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });
  test('event date element rendered', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });
  test('event timezone element rendered', () => {
    expect(EventWrapper.find('.event-timezone')).toHaveLength(1);
  });
  test('event location element renderd', () => {
    expect(EventWrapper.find('.event-location')).toHaveLength(1);
  });
  test('event about element rendered', () => {
    expect(EventWrapper.find('.event-about')).toHaveLength(1);
  });
  test('event button element rendered', () => {
    expect(EventWrapper.find('.event-toggle-btn')).toHaveLength(1);
  });
  test('event details is hidden as default', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });
  test('event details shown after button toggle', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.event-toggle-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
  test('event details hidden after button toggle', () => {
    EventWrapper.find('.event-toggle-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
});
