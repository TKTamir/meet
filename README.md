# Meet
Meet is a Progressive Web App that displays events around the world, the app fetches the event from the Google Calendar API
The app was designed using a test-driven development (TDD) approach.
- https://tktamir.github.io/meet/

## Tech Tools
- HTML5
- CSS3
- Javascript
- React
- AWS Lambda
- Serveless
- Oauth 2
- Recharts data visualization
- http-server
- Puppeteer
- Atatus
- Github Pages

## Screenshot
<img width="953" alt="Meet1" src="https://user-images.githubusercontent.com/104828119/183395255-ea4b2278-5c0b-4b09-809d-79e4ba11c6ed.PNG">
<img width="951" alt="Meet2" src="https://user-images.githubusercontent.com/104828119/183395260-7ad22f65-e842-4ba3-9acf-fb96d741e535.PNG">


## Key features:
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## User Stories:
### FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.
Story1:As a user,
 I should be able to view a list of events when loading the page.
So that I receive information about events.

Given- The page has been loaded and no search was performed yet.
When - The page is loaded by the user’s browser.
Then- The events element will show upcoming events from all cities.
Scenario 2: User should see a list of suggestions when they search for a city.
Story2: As a user,
 I should be able to see a list of suggestions when searching for a city,
So that I can find my city quicker.
Given-The main page is open.
When-User starts typing in the search bar.
Then- The user will be shown a list of suggestions.

Scenario 3: User can select a city from the suggested list.
Story 3: As a user,
 I should be able to choose a city from the suggested list
So that I can choose my city without having to type the whole name.
Given-User was typing “Berlin” in the city textbox.
And-The list of suggested cities is showing
When-The user selects a city (e.g., “Berlin, Germany”) from the list.
Then-their city should be changed to that city (i.e., “Berlin, Germany").
And-the user should receive a list of upcoming events in that city


### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

Scenario 1: An event element is collapsed by default.
Story 1: As a user,
 I should be able to first see an event without extra details
So that I’ll be presented with a view that’s not overwhelming with data.
Given-A collapsed event element containing events is loaded on the page.
When-The user opens the app and performs no action.
Then-The event element is collapsed by default.

Scenario 2: User can expand an event to see its details.
Story 2: As a user,
 I should be able to expand an event to see more details
So that I can learn more about an event that interests me.
Given-The event list and event elements have loaded.
When-The user clicks on a  details button in the event element.
Then-The event element expands to show details about the specific event chosen.

Scenario 3: User can collapse an event to hide its details.
Story 3: As a user,
 I should be able to hide an events details
So that I have control over which events details I can see.
Given-The event element is showing the event details.
When-The user clicks on the details button again.
Then- The event details part of the event elemnt is collapsed.


### FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When a user hasn’t specified a number, 32 is the default number.
Story 1: As a user,
 I should be able to see a set number of events
So that I can see the events without needing to set a default number.
Given- The app has loaded
When-The user has yet to choose a number of events in the input box.
Then- A default number of 32 events is loaded on the page.

Scenario 2: User can change the number of events they want to see.
Story 2: As a user,
 I should be able to change the number of events shown
So that I can adjust it to my preference.
Given-The app has loaded
When-User changes the number of events in the input box.
Then-The event list elements shows the number of events set by the user.


### FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection.
Story 1: As a user,
 I should be able to use the app when offline
So that I wouldn’t be dependent on an internet connection to have access to the app.
Given-The user didn’t connect to the internet and opened the app.
When-The user uses the app while offline.
Then-App will show data saved in the user cache from when the user was online on the website.

Scenario 2: Show error when user changes the settings (city, time range).
Story 2: As a user,
 I should be able to know when an action can’t be performed
So that I understand what is possible to do with the app when offline.
Given-User has been using the app offline.
When-User is trying to change a setting.
Then-User will be presented with an error- “Action unavailable while offline”.

### FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.
Story 1: As a user,
 I should be able to see a chart showing the number of upcoming events in each city
So that I have a clear visual representation of the upcoming events.

Given-User has chosen a city.
When-The events element for a specific city is loaded.
Then-Chart displaying the number of upcoming events in the chosen city will be shown.


(c) 2022 Tamir Nissim Kahalany
