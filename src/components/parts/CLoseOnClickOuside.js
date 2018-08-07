import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside'

class CLoseOnClockOuside extends Component {

    handleClickOutside() {
        this.props.toggler();
      }
    
    render() {
        return (
                this.props.component
        );
    }
}

export default enhanceWithClickOutside(CLoseOnClockOuside)