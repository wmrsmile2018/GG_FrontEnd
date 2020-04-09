import React from 'react';
import Leaders from '../../elements/leaders/index';

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
    "positio": 1
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
    "positio": 2
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
    "positio": 3
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
    "positio": 4
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
    "positio": 5
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
    "positio": 6
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
    "positio": 7
  }
];

const List = () => {

}

const HallOfFame = () => {
  return(
    <div className="hallOfFame">
      <div className="hallOfFame__header">
        <div className="hallOfFame__leaders"> </div>
        <div className="hallOfFame__information"> </div>
      </div>
      <div className="hallOfFame__list">
        <div className="hallOfFame__list-header">
          <p>Рейнтинг</p>
          <p>Процент побед</p>
          <p>Сыгранные матчи</p>
          <p>Выигранные матчи</p>
        </div>
      </div>
    </div>
  );
}

export default HallOfFame;
