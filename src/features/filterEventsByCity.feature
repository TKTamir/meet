Feature: Filter events by city

Scenario: When a user has not searched for a city, show upcoming events from all cities.
Given The app has been loaded and no search was performed yet.
When The app is loaded by the user browser.
Then The events element will show upcoming events from all cities.

Scenario: User should see a list of suggestions when they search for a city.
Given The main page is open.
When user starts typing in the search bar.
Then The user will be shown a list of cities as suggestions.

Scenario: User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox.
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list.
Then their city should be changed to that city (i.e., “Berlin, Germany").
And the user should receive a list of upcoming events in that city


