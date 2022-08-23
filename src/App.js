import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import EventGenre from './components/EventGenre';
import WelcomeScreen from './components/WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './components/Alert';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    savedLocation: 'all',
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        warningText:
          "It seems that you're not connected to the internet, your data was loaded from the cache.",
      });
    } else {
      this.setState({
        warningText: '',
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents;
      if (location === undefined) {
        locationEvents = events.slice(0, eventCount);
      } else if (eventCount === undefined) {
        locationEvents =
          location === 'all'
            ? events.slice(0, eventCount)
            : events.filter((event) => event.location === location).slice(0, eventCount);
      }

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        savedLocation: location,
      });
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />;
    const { locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <div className="pie-chart">
          <EventGenre events={this.state.events} />
        </div>
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
