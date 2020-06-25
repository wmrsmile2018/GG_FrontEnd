import React, { Component, Fragment } from 'react';

import InputS from '../components/inputSubmit/index';
import Avatar1 from '../components/avatar1/index';

import CSGO from '../public/svg/csgo.svg';
import Trapeze from '../public/svg/trapeze.svg';
import GG from '../public/svg/gg.svg';
import Options from '../public/svg/options.svg';
import Person from '../public/svg/person.svg';
import placeholder from '../public/images/placeholder.jpg';

import getHistory from '../modules/history';


class HeaderPersonal extends Component {
  handleOnClick() {
    getHistory().push('/options');
  }

  render() {
    return (
      <div className="headerPersonal">
        <div className="side1">
          <InputS type="submit" classN="headerPersonal" image1={GG} link='/mode-selection'>
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
          <p className="icons">Иконки</p>
        </div>
        <div className="side4">
          <p className="title">Рейтинг</p>
          <p className="raiting">7,762</p>
        </div>
        <div className="side5" >
          <InputS type="submit" classN="headerPersonal" link='/personal-page'>
            <p>23 000 P</p>
          </InputS>
          <img className="icon" src={Options} onClick={this.handleOnClick} />
          <span className="nickName" onClick={this.handleOnClick} >Настройки</span>
        </div>
      </div>
    )
  }
}

export default HeaderPersonal;
