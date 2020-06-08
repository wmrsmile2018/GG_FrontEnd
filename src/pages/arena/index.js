import React, {Component} from 'react';
import Leaders from '../../components/leaders/index';
import Avatar1 from '../../components/avatar1/index';
import placeholder from '../../public/images/placeholder.jpg';
import InputS from '../../components/inputSubmit/index';

const dateFormat = require('dateformat');

const tmpObjs = [
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "12345678901234567890nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
]

class Arena extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let {seconds, minutes} = this.state;
    if (seconds >= 60) {
      seconds -= 60;
      minutes += 1;
    }
    this.setState({
      seconds: seconds + 1,
      minutes: minutes,
    })
  }

  render() {
    const {minutes, seconds} = this.state;
    const time = new Date(0, 0, 0, 0, minutes, seconds);
    return (
      <div className="arena">
          <div className="arena__leaders">
            <div className="arena__leaders-outline1">
              <div className="arena__largeWing"></div>
              <div className="arena__mediumWing"></div>
              <div className="arena__smallWing"></div>
            </div>
            <div className="arena__leaders-outline2">
              <div className="arena__largeWing"></div>
              <div className="arena__mediumWing"></div>
              <div className="arena__smallWing"></div>
            </div>
            <Leaders objs={tmpObjs}/>
          </div>

        <p className="arena__header">Подбор соперника</p>
        <div className="arena__content">
          <div className="arena__player1">
            <p className="arena__winRate">45% побед</p>
            <Avatar1
              classN="_arena"
              avatar={placeholder}
            />
            <p className="arena__raiting">6500</p>
            <InputS type="submit" value="Готов" classN="arena"/>
          </div>
          <div className="arena__ticker">
            <p className="arena__tittle">Время ожидания:</p>
            <p className="arena__ticker">{dateFormat(time, "MM:ss")}</p>
            <p className="arena__bet">2000 P</p>
          </div>
          <div className="arena__player2">
            <p className="arena__winRate">45% побед</p>
            <Avatar1
              classN="_arena"
              avatar={placeholder}
            />
            <p className="arena__raiting">5434</p>
            <InputS type="submit" value="Готов" classN="arena"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Arena;
