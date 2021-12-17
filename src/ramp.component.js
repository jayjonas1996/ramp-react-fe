import React from 'react';

export default class RampComponent extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    var dateFormatOption = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
      second: 'numeric',
    };

    var inputValue = this.props.input;

    if (!inputValue) {
      window.setInterval(() => {
        this.setState({
          date: new Date(),
        });
      }, 100);
      return (
        <div>
          {this.state.date.toLocaleDateString('en-US', dateFormatOption)}
        </div>
      );
    } else if (inputValue instanceof Array) {
      var elements = [];
      inputValue.forEach((value) => {
        elements.push(<div>{value}</div>);
      });
      return <div>{elements}</div>;
    } else {
      return <div>{inputValue.toString()}</div>;
    }
  }
}
