import React, { Component, Fragment } from 'react';


import InputS from '../components/inputSubmit/index';
import Earth from '../public/svg/earth.svg';
import Trapeze from '../public/svg/trapeze.svg';
import GG from '../public/svg/gg.svg';
import Person from '../public/svg/person.svg';

class HeaderNews extends Component {
  render() {
    return (
      <div className="headerNews">
        <div className="headerNews-leftSide">
          <InputS type="submit" classN="headerNews" image1={GG} link='arena'>
            <p>
              Арена
            </p>
          </InputS>
        </div>
        <div className="headerNews-center">
          <p className="headerNews-title">Новости</p>
          <img className="headerNews-earth" src={Earth}/>
          <img className="headerNews-trapeze" src={Trapeze}/>
        </div>
        <div className="headerNews-rightSide">
          <InputS type="submit" value="Арена" classN="headerNews" image2={Person} link='/personal-page'>
            <Fragment>
              <p className="nickName">Nagibator</p>
              <p className="cash">23 000 P</p>
            </Fragment>
          </InputS>
        </div>
      </div>
    )
  }
}

export default HeaderNews;
