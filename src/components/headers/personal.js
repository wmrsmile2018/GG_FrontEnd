import React, { Component } from 'react';

import InputS from '../inputSubmit/index';
import Avatar1 from '../avatar1/index';

import Options from '../../public/svg/options.svg';
import placeholder from '../../public/images/placeholder.jpg';
import Links from '../../public/images/links.jpg';

import getHistory from '../../modules/history';



class HeaderPersonal extends Component {
  handleOnClick() {
    getHistory().push('/options');
  }

  render() {
    return (
      <div className="headerPersonal">
        <div className="side1">
          <InputS type="submit" classN="headerPersonal" image1={true} link='/mode-selection'>
            <p>Арена</p>
          </InputS>
        </div>
        <div className="side2">
          <Avatar1
            classN="_arena"
            avatar={placeholder}
          />
        </div>
        <div className="side3">
          <p className="nickName">Nagibator123_million_lABS</p>
          <p className="about">Люби меня как роза воду678900000000</p>
          <p className="icons"><img src={Links} alt="" width="175"/></p>
        </div>
        <div className="side4">
          <p className="title">Рейтинг</p>
          <p className="raiting">7,762</p>
        </div>
        <div className="side5" >
          <InputS type="submit" classN="headerPersonal" link='/personal-page'>
            <p>23 000 P</p>
          </InputS>
          <img className="icon" src={Options} onClick={this.handleOnClick} alt=""/>
          <span className="nickName" onClick={this.handleOnClick} >Настройки</span>
        </div>
      </div>
    )
  }
}

export default HeaderPersonal;
