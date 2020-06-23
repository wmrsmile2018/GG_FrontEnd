import React, { Component } from 'react';
import InputS from '../inputSubmit/index';
import Chat from '../../public/svg/chat.svg';
import PropTypes from 'prop-types';

class RightBar extends Component {
  state = {
    position: 110
  }

  static propTypes = {
    actionOnClick: PropTypes.func,
  }

  static defaultProps = {
    actionOnClick: () => {},
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let position = 0;
    if (winScroll >= 110) {
      position = 0;
    } else {
      position = 110;
    }
    if (position !== this.state.position) {
      this.setState({
        position: position,
      })
    }

  }

  render() {
    const { position } = this.state;
    const { actionOnClick } = this.props;
    const pos = position === 110 ? 'absolute' : 'fixed';
    const top = position === 110 ? 110 : 0;
    return (
      <div className="right"
        style={{marginTop: top}}
        >
        <div className="rightBar"
          style={{position: pos}}
          >
          <div className="rightBar-outline"> </div>
          <div className="rightBar-background"> </div>
          <div className="header"></div>
          <div className="content"></div>
          <div className="footer">
            <InputS type="submit"classN="rightBar" image2={Chat} actionOnClick={actionOnClick}>
              <p>Чат</p>
            </InputS>
          </div>
        </div>
      </div>
    )
  }
}

export default RightBar;
