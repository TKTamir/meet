import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });
  test('render events-num div', () => {
    expect(NumberOfEventsWrapper.find('.events-num')).toHaveLength(1);
  });
  test('render events number label', () => {
    expect(NumberOfEventsWrapper.find('.events-num-label')).toHaveLength(1);
  });
  test('render events number input', () => {
    expect(NumberOfEventsWrapper.find('#events-num-input')).toHaveLength(1);
  });
  test('render 32 events by default', () => {
    expect(NumberOfEventsWrapper.find('#events-num-input').prop('value')).toBe(32);
  });
  test('render number of events according to user input', () => {
    NumberOfEventsWrapper.find('#events-num-input').simulate('change', {
      target: { value: 18 },
    });
    expect(NumberOfEventsWrapper.find('#events-num-input').prop('value')).toBe(18);
  });
});
