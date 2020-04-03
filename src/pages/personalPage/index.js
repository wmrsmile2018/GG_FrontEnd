import React, {Component} from 'react';

import Finances from '../finances/index';
import History from '../../elements/history/index';
import Statics from '../../elements/statics/index';
import MainButton from '../../elements/mainButton/index';
import Graphic from '../../elements/graphic/index';


const currentDateTime = new Date();
const startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
const currentTime = currentDateTime.getTime();
const pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
const hourOfMillisecs = 3600000;
const hoursOfOneWeek = 168;

const dayOfTheWeek = {
  "Mon": 1,
  "Tue": 2,
  "Wed": 3,
  "Thu": 4,
  "Fri": 5,
  "Sat": 6,
  "Sun": 7
}

const diffDays = () => {
  const date = (new Date(startTimeOfCurrentYear)).toString();
  const firstDayOfTheYear = (date.split(' '))[0];
  return (8 - dayOfTheWeek[firstDayOfTheYear]) % 7;
}

const currentWeek = () => {
  const currentDay = Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / 24);
  return (currentDay - diffDays()) / 7;
}

const generatorDate = (min, max) => {
  var output = [];
  for (var i = min; i <= max; i ++) {
    output.push(i)
  }
  return output;
}

const generatorDate1 = (min, max) => {
  var output = [];
  for (var i = min; i <= max; i ++) {
    output.push(Math.abs(Math.cos(Math.random() * 10)) * 10 * Math.random() + Math.random() + Math.random() * 3)
  }
  return output;
}

const data1 = generatorDate1(0, 100);
const data2 = generatorDate(0, 100);

const tmpObjs = [
  {
    "id_history": "5e7e1e0559fc461521247fde",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e7e1e05ef8cfbae99dda5c1",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05c71c22507e82fff1",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e05dcbd5a29884cf6c8",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e055abd33008486f113",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e0569c88cc7b3cd00d3",
    "timestamp": 1585323561,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e7e1e056567fd53c86b6118",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05c24a961e4f823f8f",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e05e1c072dfac5cd25f",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05b9b99d1ed1749bff",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e05895d21a27846fa8c",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e7e1e055cf5ad58d1dd3bb5",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e052bb8523304ecda9c",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e0598cd772d0cbb7405",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e052e90e3b1ed524e38",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e05ae3b086d6e721c06",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e7e1e0533fe48645138e2ae",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e052fa7b9ac33dea8ca",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e053d3a86e86cc4e0d1",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e0565266c67f6f41308",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e0524ae3e3a01769228",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e7e1e05ef582409baac2bef",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05478c493cab0e11a4",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e055bab037533c802a4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05296b6548903b61fd",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e05178287c51ef5a45f",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e7e1e058178959dbe030ebe",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05f3102524a723bb4b",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e05789ada1d8dab5a55",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05e4f1eeacc4236564",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "id_history": "5e7e1e05a6e6b9d8b5a7b90e",
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e7e1e05ca473ecb40daf8fe",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e0512ac88ed27e81cde",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e7e1e05b5758260d9cb9d4f",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e7e1e05b35db596b396c5ef",
        "photo": "http://placehold.it/32x32"
      }
    ]
  }
];


class PersonalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showButtons: 'none',
      data1: [],
      data2: [],
    }
    this.handleVisibleButtons = this.handleVisibleButtons.bind(this);
    this.test = this.test.bind(this);
    this.showYears = this.showYears.bind(this);
    this.showHalvesYear = this.showHalvesYear.bind(this);
    this.showMonths = this.showMonths.bind(this);
    this.showWeeks = this.showWeeks.bind(this);
    this.showDays = this.showDays.bind(this);
  }
  test() {

  }

  showDays() {
    this.setState({
      data1: generatorDate1(0, 3560),
      data2: generatorDate(0, 3560)
    })
  }

  showWeeks() {
    this.setState({
      data1: generatorDate1(0, 530),
      data2: generatorDate(0, 530)
    })
  }

  showMonths() {
    this.setState({
      data1: generatorDate1(0, 120),
      data2: generatorDate(0, 120)
    })
  }

  showHalvesYear() {
    this.setState({
      data1: generatorDate1(0, 20),
      data2: generatorDate(0, 20)
    })
  }

  showYears() {
    this.setState({
      data1: generatorDate1(0, 10),
      data2: generatorDate(0, 10)
    })
  }

  handleVisibleButtons() {
    if (this.state.showButtons === 'none') {
      this.setState({
        showButtons: 'block'
      })
    } else {
      this.setState({
        showButtons: 'none'
      })
    }
  }

  render() {
    return (
      <div className="personalPage">
        <MainButton classN="personalPage" link="/" actionOnClick={this.test} text="Игры"/>
        <MainButton classN="personalPage" link="/" actionOnClick={this.handleVisibleButtons} text="Финансы"/>
        <MainButton classN="personalPage" display={this.state.showButtons} link="/" actionOnClick={this.handleVisibleButtons} text="Статистика"/>
        <MainButton classN="personalPage" display={this.state.showButtons} link="/" actionOnClick={this.handleVisibleButtons} text="Управление деньгами"/>
        <Graphic data1={this.state.data1} data2={this.state.data2}/>
        <div className="personalPage__chooseInterval">
          <MainButton classN="personalPage" xTittle="" link="/" actionOnClick={this.showDays} text="день"/>
          <MainButton classN="personalPage" xTittle="" link="/" actionOnClick={this.showWeeks} text="неделя"/>
          <MainButton classN="personalPage" xTittle="" link="/" actionOnClick={this.showMonths} text="месяц"/>
          <MainButton classN="personalPage" xTittle="" link="/" actionOnClick={this.showHalvesYear} text="6 мес."/>
          <MainButton classN="personalPage" xTittle="" link="/" actionOnClick={this.showYears} text="12 мес."/>
        </div>
      </div>
    )
  }
}

// <Statics
//   classN="personalPage"
//   kills="12649"
//   deaths="7344"
//   matchesPlayed="100"
//   mathcesWon="23"
//   roundsPlayed="7100"
//   roundsWon="3213"
//   mvp="849"
//   winRate="45"
// />

// <History classN="personalPage"response={tmpObjs}/>
export default PersonalPage;
