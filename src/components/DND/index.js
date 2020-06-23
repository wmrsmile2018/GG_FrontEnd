import React, { Component } from 'react';
import Draggable from "react-draggable";
import PropTypes from 'prop-types';

class DND extends Component {
  static propTypes = {
    children: PropTypes.node,
    classN: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    classN: '',
  }

  render() {
    const { children } = this.props;
    return (
      <div className="DND">
        <Draggable bounds="parent">
          {children}
        </Draggable>
      </div>
    )
  }
}

export default DND;
