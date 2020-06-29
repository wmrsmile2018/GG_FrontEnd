import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputS from '../inputSubmit/index';
import TextIF from '../textInputField/index';

import Friends from '../../public/images/friends.jpg'

class RightBar extends Component {
  state = {
    search: ''
  }

  static propTypes = {
    actionOnClick: PropTypes.func,
    active: PropTypes.bool,
  }

  static defaultProps = {
    active: false,
    actionOnClick: () => {},
  }

  handleOnChange = value => {
     this.setState({search: value});
  };

  render() {
    const { actionOnClick, active } = this.props;
    return (
      <div className="right">
        <div className="rightBar">
          <div className="rightBar-outline"> </div>
          <div className="rightBar-background"> </div>
          <div className="header">
            <div className="header-buttons">
              <div className="openChat">
                <InputS type="submit"classN="rightBar" image2={true} actionOnClick={actionOnClick} active={active}>
                </InputS>
              </div>
              <div className="newGroup">
                <InputS type="submit"classN="rightBar" image2={true} actionOnClick={null}>
                </InputS>
              </div>
              <div className="newFriend">
                <InputS type="submit"classN="rightBar" image2={true} actionOnClick={null}>
                </InputS>
              </div>
              <div className="challenge">
                <InputS type="submit"classN="rightBar" image2={true} actionOnClick={null}>
                </InputS>
              </div>
            </div>
            <div className="header-search">
              <div className="search-image"></div>
              <TextIF classN="rightBar" actionOnChange={this.handleOnChange}
                type="text" display={this.state.search}
              />
            </div>
          </div>
          <div className="content">
            <img src={Friends} alt=""/>
          </div>

        </div>
      </div>
    )
  }
}

export default RightBar;
