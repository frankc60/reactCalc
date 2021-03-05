import React from 'react';

class Keypad extends React.Component{
  
  render() {
    return (
        <input type="button" value={this.props.value} onClick={this.props.clickHandler}/>
    );
  }
}

export default Keypad;
