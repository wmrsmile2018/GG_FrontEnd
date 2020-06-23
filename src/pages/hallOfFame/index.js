import React, { Component } from 'react';
import Leaders from '../../components/leaders/index';
import Avatar1 from '../../components/avatar1/index';
import placeholder from '../../public/images/placeholder.jpg';
import Outline from '../../public/svg/outline.svg';
import getHistory from '../../modules/history';
import { setPath } from '../../actions/actionPath.js';
import { connect } from 'react-redux';

const leaders = [
  {photo: placeholder, display1: "block", display2: "none", outline: Outline, nickname: "nagibator1234"},
  {photo: placeholder, display1: "block", display2: "none", outline: Outline, nickname: "nagibator1234"},
  {photo: placeholder, display1: "block", display2: "none", outline: Outline, nickname: "nagibator1234"},
]


const tmpObjs = [
  {
    "number": 1,
    "id_user": "5e8e1ec01e3cb2dd2548aeba",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 1
  },
  {
    "number": 2,
    "id_user": "5e8e1ec0b83429e32893d42f",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 2
  },
  {
    "number": 3,
    "id_user": "5e8e1ec088d7ad6b142fc514",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 3
  },
  {
    "number": 4,
    "id_user": "5e8e1ec036faedfbe1a9b6d3",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 4
  },
  {
    "number": 5,
    "id_user": "5e8e1ec0cfcd72d7555fcc19",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 5
  },
  {
    "number": 6,
    "id_user": "5e8e1ec071fde6148c8125a3",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 6
  },
  {
    "number": 7,
    "id_user": "5e8e1ec08dab45576254848b",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "nickname": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 7
  }
];
// (+element.raiting).toLocaleString()
const List = tmpObjs.map((element, index) =>
  <div key={index} className={"hallOfFame__list-element hallOfFame__list-type" + index % 2}>
    <p className="hallOfFame__position">{element.position}</p>
    <div className="hallOfFame__leader">
      <Avatar1
        classN="_leader"
        display="block"
        w="100px"
        h="100px"
        img={element.photo}
      />
      <p className="leader__nickname" style={{display: element.display2}}>{element.nickname}</p>
    </div>
    <p className="hallOfFame__raiting">{element.raiting}</p>
    <p className="hallOfFame__winRate">{element.win_rate}</p>
    <p className="hallOfFame__matchesPlayed">{element.matches_played}</p>
    <p className="hallOfFame__matchesWon">{element.matches_won}</p>
  </div>
)

class HallOfFame extends Component {
  componentDidMount() {
    this.props.setPath(getHistory().location.pathname);
  }
  render() {
    return(
      <div className="hallOfFame">
        <div className="hallOfFame__header">
          <div className="hallOfFame__leaders">
            <p className="hallOfFame__leaders-title">
              ЗАЛ СЛАВЫ
            </p>
            <div className="hallOfFame__leaders-outline1">
              <div className="hallOfFame__largeWing"></div>
              <div className="hallOfFame__mediumWing"></div>
              <div className="hallOfFame__smallWing"></div>
            </div>
            <div className="hallOfFame__leaders-outline2">
              <div className="hallOfFame__largeWing"></div>
              <div className="hallOfFame__mediumWing"></div>
              <div className="hallOfFame__smallWing"></div>
            </div>
            <Leaders classN="hallOfFame" objs={leaders}/>
          </div>
          <div className="hallOfFame__information">
            <Avatar1
              classN="_arena"
              w="50px"
              h="50px"
              avatar={placeholder}
            />
          <div className="hallOfFame__information-data">
              <div className="hallOfFame__information-raiting">
                <p>Рейнтинг</p>
                <label>7.762</label>
              </div>
              <div className="hallOfFame__information-winRate">
                <p>Процент<br/>побед</p>
                <label>45%</label>
              </div>
              <div className="hallOfFame__information-matchesPlayed">
                <p>Сыгранные<br/>матчи</p>
                <label>45%</label>
              </div>
              <div className="hallOfFame__information-matchesWon">
                <p>Выигранные<br/>матчи</p>
                <label>45%</label>
              </div>
            </div>
          </div>
        </div>
        <div className="hallOfFame__list">
          <div className="hallOfFame__list-header">
            <p>Рейнтинг</p>
            <p>Процент<br/>побед</p>
            <p>Сыгранные<br/>матчи</p>
            <p>Выигранные<br/>матчи</p>
          </div>
          {List}
        </div>
      </div>
    );
  }
}

export default connect(state => ({}), { setPath })(HallOfFame);
