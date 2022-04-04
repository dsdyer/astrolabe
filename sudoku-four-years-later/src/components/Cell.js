import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  render() {
    return (
      <div className="cell">
        Cell {this.props.digit}
      </div>
    )
  }
}

export default Cell;
