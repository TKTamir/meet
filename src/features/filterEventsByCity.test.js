import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  test('When a user has not searched for a city, show upcoming events from all cities.', ({
    given,
    when,
    then,
  }) => {
    given('The app has been loaded and no search was performed yet.', () => {});

    let AppWrapper;
    when('The app is loaded by the user browser.', () => {
      AppWrapper = mount(<App />);
    });

    then('The events element will show upcoming events from all cities.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city.', ({
    given,
    when,
    then,
  }) => {
    let CitySearchWrapper;
    given('The main page is open.', () => {
      const locations = extractLocations(mockData);
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
    });

    when('user starts typing in the search bar.', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    then('The user will be shown a list of cities as suggestions.', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the suggested list.', ({ given, when, then }) => {
    given('App has loaded and the search input box appears on the page.', () => {});

    when('User  clicks the empty input box.', () => {});

    then('A dropdown list of recommended cities will appear below the input box.', () => {});
  });
});
