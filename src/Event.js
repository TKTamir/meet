import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  handleItemToggled() {
    alert(this.state.showDetails);
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-date">{event.start.dateTime}</p>
        <p className="event-timezone">{event.start.timeZone}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-about"></p>
        {this.state.showDetails && <div className="event-details">{event.description}</div>}

        <button onClick={this.handleItemToggled.bind(this)} className="event-toggle-btn">
          Details!
        </button>
      </div>
    );
  }
}

export default Event;
