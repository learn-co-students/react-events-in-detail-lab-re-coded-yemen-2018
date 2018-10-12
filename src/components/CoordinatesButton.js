// Code CoordinatesButton Component Here


import React from 'react';

class CoordinatesButton extends React.Component {
  clickEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  
   render() {
    return (
        <button onClick={this.clickEvent}>Coords</button>
      )
   }
}

export default CoordinatesButton;