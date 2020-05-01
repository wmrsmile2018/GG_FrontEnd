import React, {Component} from 'react';

import History from '../../components/history/index';
import Profit from '../../components/profit/index';
import Statics from '../../components/statics/index';
import MainButton from '../../components/mainButton/index';
import InputS from '../../components/inputSubmit/index';
import Graphic from '../../components/graphic/index';

// const currentDateTime = new Date();
// const startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
// const currentTime = currentDateTime.getTime();
// const pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
// const hourOfMillisecs = 3600000;
// const hoursOfOneWeek = 168;

const base = 1577836800; // когда пользователь впервые получил деньги

const Data = [
  {
    "number": 1,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 5,
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 1,
    "id_history": "5e8a2987856e68b2fd62605b",
    "id_user": "5e8a29876fa50f774116f06e",
    "id_command": "5e8a29879b0ebd78cb436d9e",
    "profit": 2538,
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987a4f04c6a12d532a2",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873e702a53d6b05ba3",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987b5de9651783d4fcb",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987ec868c92d1b28f32",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 1,
    "id_history": "5e8a29877eac29d29268b6ca",
    "id_user": "5e8a29873aed3a85a7667c7f",
    "id_command": "5e8a298775904164724fb18a",
    "profit": -2049,
    "timestamp": 1585490413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a29874ff0c79304a514c7",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29870a55bf77b831721f",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a298774edac8e273e1e12",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a298760a9d78881aa3727",
        "photo": "http://placehold.it/32x32"
      }
    ]
  }
];

///////////////////
// const days = {
//   "Mon": 1,
//   "Tue": 2,
//   "Wed": 3,
//   "Thu": 4,
//   "Fri": 5,
//   "Sat": 6,
//   "Sun": 7
// }

// const diffDaysFirstWeek = (unixTimestamp) => {
//   const date = new Date(startTimeOfCurrentYear);
//   const firstDayOfTheYear = date.getDate();
//   return (8 - firstDayOfTheYear) % 7;
// }
// const currentWeek = () => {
//   const currentDay = Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / 24);
//   return (currentDay - diffDaysFirstWeek()) / 7;
// }
///////////////////
const getDiffYear = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  return year2 - year1;
}

const getDiffHalvesYear = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const month1 = date1.getMonth() + 1;
  const year1 = date1.getFullYear();
  const month2 = date2.getMonth() + 1;
  const year2 = date2.getFullYear();
  return (Math.floor((month2 - month1) / 6) + (year2 - year1) * 100);
}

const getDiffMonth = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const month1 = date1.getMonth() + 1;
  const year1 = date1.getFullYear();
  const month2 = date2.getMonth() + 1;
  const year2 = date2.getFullYear();
  return (month2 - month1 + (year2 - year1) * 100);
}

const getDiffWeek = (unixTimestampBase, unixTimestampCurrent) => {
  const diff = unixTimestampCurrent - unixTimestampBase;
  return Math.floor(diff / 60 / 60 / 24 / 7) + 1;
}

const getDiffDay = (unixTimestampBase, unixTimestampCurrent) => {
  const diff = unixTimestampCurrent - unixTimestampBase;
  return Math.floor(diff / 60 / 60 / 24) + 1;
}

const getDate1 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getDate() + "/" +
      (currentDate.getMonth() + 1)
      + "/" + currentDate.getFullYear());
}

const getDate2 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getMonth() + 1 + "/" + currentDate.getFullYear());
}

const getDate3 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getFullYear());
}

///////////////////

const fillXAxisWeek = (base, objs) => {
  let sum = 0;
  let flag = -1;
  const XAxis = [], YAxis = [];
  for (let i = 0; i < objs.length; i++) {
    const diff = getDiffWeek(base, objs[i].timestamp)
    if (diff !== flag) {
      flag = diff;
      if (sum !== 0) {
        YAxis.push(sum);
      }
      XAxis.push(diff);
    }
    sum += objs[i].profit;
  }
  YAxis.push(sum);
  return {XAxis, YAxis};
}

const fillXAxis = (base, objs, funDiff, funShow) => {
  let sum = 0;
  let flag = -1;
  const XAxis = [], YAxis = [];
  for (let i = 0; i < objs.length; i++) {
    const diff = funDiff(base, objs[i].timestamp);
    if(diff !== flag) {
      flag = diff;
      if (sum !== 0) {
        YAxis.push(sum);
      }
      XAxis.push(funShow(objs[i].timestamp));
    }
    sum += objs[i].profit;
  }
  YAxis.push(sum);
  return {XAxis, YAxis};
}
///////////////////

class PersonalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showHGames: true,
      showHFinances: false,
      showMMoney: false,

      showButtons: 'none',
      data1: [],
      YAxis: [],
    }
    this.showYears = this.showYears.bind(this);
    this.showHalvesYear = this.showHalvesYear.bind(this);
    this.showMonths = this.showMonths.bind(this);
    this.showWeeks = this.showWeeks.bind(this);
    this.showDays = this.showDays.bind(this);
    this.handleOnClickMMoney = this.handleOnClickMMoney.bind(this);
    this.handleOnClickHGames = this.handleOnClickHGames.bind(this);
    this.handleOnClickHFinances = this.handleOnClickHFinances.bind(this);
  }

  handleOnClickHGames() {
    console.log("hello1");
    this.setState({
      showHGames: true,
      showHFinances: false,
      showMMoney: false,
      showButtons: 'none'
    })
  }

  handleOnClickHFinances() {
    console.log("hello2");
    this.setState({
      showHGames: false,
      showHFinances: true,
      showMMoney: false,
      showButtons: 'block'
    })

  }

  handleOnClickMMoney() {
    console.log("hello3");
    this.setState({
      showHGames: false,
      showHFinances: false,
      showMMoney: true,
      showButtons: 'block'
    })
  }

  showDays() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffDay, getDate1);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
    })
  }

  showWeeks() {
    const {XAxis, YAxis} = fillXAxisWeek(base, Data);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis
    })
  }

  showMonths() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffMonth, getDate2);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis
    })
  }

  showHalvesYear() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffHalvesYear, getDate2);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis
    })
  }

  showYears() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffYear, getDate3);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis
    })
  }


  render() {
    return (
      <div className="personalPage">
        <div className="personalPage__header">
          <div className="personalPage__header-top">
            <InputS type="submit" value="Игры" classN="personalPage"
              actionOnClick={this.handleOnClickHGames}
              active={this.state.showHGames}
              />
            <InputS type="submit" value="Финансы" classN="personalPage"
              actionOnClick={this.handleOnClickHFinances}
              active={!this.state.showHGames}
              />
          </div>
          <div className="personalPage__header-bottom">
            <InputS type="submit" value="Статистика" classN="personalPage"
              display={this.state.showButtons} active={this.state.showHFinances}
              actionOnClick={this.handleOnClickHFinances}
              />
            <InputS type="submit" value="Управление деньгами" classN="personalPage"
              display={this.state.showButtons} active={this.state.showMMoney}
              actionOnClick={this.handleOnClickMMoney}
              />
          </div>
        </div>

        <div className="personalPage__graphic" style={{display: "none"}}>
          <Graphic XAxis={this.state.XAxis} YAxis={this.state.YAxis}/>
          <div className="personalPage__chooseInterval">
            <MainButton classN="personalPage" xTittle="" link="/"
              actionOnClick={this.showDays} text="день"
            />
            <MainButton classN="personalPage" xTittle="" link="/"
              actionOnClick={this.showWeeks} text="неделя"
            />
            <MainButton classN="personalPage" xTittle="" link="/"
              actionOnClick={this.showMonths} text="месяц"
            />
            <MainButton classN="personalPage" xTittle="" link="/"
              actionOnClick={this.showHalvesYear} text="6 мес."
            />
            <MainButton classN="personalPage" xTittle="" link="/"
              actionOnClick={this.showYears} text="12 мес."
            />
          </div>
        </div>

        <Statics
          visibility={true}
          classN="personalPage"
          kills="12649"
          deaths="7344"
          matchesPlayed="100"
          mathcesWon="23"
          roundsPlayed="7100"
          roundsWon="3213"
          mvp="849"
          winRate="55"
        />

      <History visibility={true} classN="personalPage" response={Data}/>
        <Profit visibility={false} classN="personalPage" response={Data}/>
      </div>
    )
  }
}

export default PersonalPage;
