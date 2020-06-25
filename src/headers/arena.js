import React, { Component, Fragment } from 'react';

import InputS from '../components/inputSubmit/index';
import CSGO from '../public/svg/csgo.svg';
import Trapeze from '../public/svg/trapeze.svg';
import GG from '../public/svg/gg.svg';
import Person from '../public/svg/person.svg';

class HeaderArena extends Component {
  render() {
    return (
      <div className="headerArena">
        <div className="headerArena-leftSide">
          <InputS type="submit" classN="headerArena" image1={GG} link='/news'>
            <p>
              Новости
            </p>
          </InputS>
        </div>
        <div className="headerArena-center">
          <img className="headerArena-csgo" src={CSGO} alt=""/>
          <img className="headerArena-trapeze" src={Trapeze} alt=""/>
        </div>
        <div className="headerArena-rightSide">
          <InputS type="submit" value="Арена" classN="headerArena" image2={Person} link='/personal-page'>
            <Fragment>
              <p className="nickName">Nagibator</p>
              <p className="cash">23 000</p>
            </Fragment>
          </InputS>
        </div>
      </div>
    )
  }
}

export default HeaderArena;
