// Code DelayedButton  Component Here


import React from 'react';

class DelayedButton  extends React.Component {
  clickEvent = (event) => {
    event.persist();
    setTimeout(() => {
    this.props.onDelayedClick(event);
  },
  this.props.delay);
}
  
   render() {
    return (
        <button onClick={this.clickEvent}>Coords</button>
      )
   }
}

export default DelayedButton ;