import React from 'react';
import Leaders from '../../elements/leaders/index';
import Avatar1 from '../../elements/avatar1/index';
import placeholder from '../../public/images/placeholder.jpg';
import Outline from '../../public/svg/outline.svg';

const leaders = [
  {photo: placeholder, display1: "none", display2: "block", outline: Outline, nickname: "nagibator1234"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
]


const tmpObjs = [
  {
    "number": 1,
    "id_user": "5e8e1ec01e3cb2dd2548aeba",
    "raiting": 7752,
    "win_rate": "45%",
    "matches_played": 5000,
    "matches_won": 2000,
    "name": "Nagibator12",
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
    "name": "Nagibator12",
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
    "name": "Nagibator12",
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
    "name": "Nagibator12",
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
    "name": "Nagibator12",
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
    "name": "Nagibator12",
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
    "name": "Nagibator12",
    "photo": "http://placehold.it/32x32",
    "position": 7
  }
];

const List = tmpObjs.map((element, index) =>
  <div key={index} className={"hallOfFame__list" + index + " hallOfFame__list-type" + index % 2}>
    <p className="hallOfFame__position">{element.position}</p>
    <div className="hallOfFame__leader">
      <Avatar1
        classN="hallOfFame"
        display="block"
        svg={Outline}
        w="100px"
        h="100px"
        img={placeholder}
        />
    <p className="leader__nickname" style={{display: element.display2}} >{element.nickname}</p>
    </div>
    <p className="hallOfFame__raiting">{element.raiting}</p>
    <p className="hallOfFame__winRate">{element.winRate}</p>
    <p className="hallOfFame__matchesPlayed">{element.matchesPlayed}</p>
    <p className="hallOfFame__matchesWon">{element.matchesWon}</p>
  </div>
)

const HallOfFame = () => {
  return(
    <div className="hallOfFame">
      <div className="hallOfFame__header">
        <Leaders classN="hallOfFame" objs={leaders}/>
        <div className="hallOfFame__information">
          <Avatar1
            classN="arena"
            display="none"
            svg={null}
            w="50px"
            h="50px"
            img={placeholder}
          />
        </div>
      </div>
      <div className="hallOfFame__list">
        <div className="hallOfFame__list-header">
          <p>Рейнтинг</p>
          <p>Процент побед</p>
          <p>Сыгранные матчи</p>
          <p>Выигранные матчи</p>
        </div>
        {List}
      </div>
    </div>
  );
}

export default HallOfFame;
