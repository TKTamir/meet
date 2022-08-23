import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleItemToggled = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-date">
          {moment(event.start.dateTime).format('MMMM Do YYYY, h:mm:ss a')}
        </p>
        <p className="event-timezone">{event.start.timeZone}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-about"></p>
        {this.state.showDetails && <div className="event-details">{event.description}</div>}

        <button onClick={this.handleItemToggled} className="event-toggle-btn">
          Details
        </button>
      </div>
    );
  }
}

export default Event;
