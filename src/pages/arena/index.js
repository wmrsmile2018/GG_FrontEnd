import React, {Component} from 'react';
import Sprintf from 'sprintf-js';
import Leaders from '../../elements/leaders/index';

const dateFormat = require('dateformat');

const tmpObjs = [
  {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"}
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
      <div className={"arena"}>
        <Leaders classN="arena" objs={tmpObjs}/>
        Подбор соперника
        <div className="arena">
          <div className="arena__player1"></div>
          <div className="arena__ticker">
            <p className="arena__tittle">Время ожидания:</p>
            <p className="arena__ticker">{dateFormat(time, "MM:ss")}</p>
            <p className="arena__bet"></p>
          </div>
          <div className="arena__player2"></div>
        </div>
        <div className="arena__rules">
          <div className="arena__rule1">1</div>
          <div className="arena__rule2">2</div>
          <div className="arena__rule3">3</div>
        </div>
      </div>
    )
  }
}

export default Arena;
