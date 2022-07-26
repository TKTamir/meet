import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    this.props.updateEvents(undefined, event.target.value);
    this.setState({
      numberOfEvents: event.target.value,
    });
  };

  render() {
    return (
      <div className="events-num">
        <label className="events-num-label">Number of Events: </label>
        <br />
        <input
          type="number"
          id="events-num-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
