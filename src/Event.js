import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleItemToggled = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };
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

        <button className="event-toggle-btn" onClick={this.handleItemToggled}>
          Details
        </button>
      </div>
    );
  }
}

export default Event;
