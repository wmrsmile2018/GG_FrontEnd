import React, {Component} from 'react'
import Avatar2 from '../avatar2/index'
import DetailedInf from '../detailedInf/index';

const getDate = (unix_timestamp) => {
  const currentDate = new Date(unix_timestamp * 1000);
  return (currentDate.getDate() + "/" +
      (currentDate.getMonth() + 1)
      + "/" + currentDate.getFullYear());
}

const pad = (num) => {
  return ("0"+num).slice(-2);
}

const getTime = (unix_timestamp) => {
  const currentDate = new Date(unix_timestamp * 1000);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

class Histories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      red: "#eb57579e",
      green: "#59a7ea75",
      // green: "#3fd27a75",
      // green: "#195e9ac9",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.isOpen);
    if (this.state.isOpen === false) {
        this.setState({
          isOpen: true
        })
    } else {
      this.setState({
        isOpen: false
      })
    }
  }

  setType = (array) => {
    if (array.length === 1) {
      return '1:1';
    } else if (array.length === 2) {
      return '2:2';
    } else if (array.length === 5) {
      return '5:5';
    }
  }

  render(){
    const { red, green, isOpen } = this.state;
    const background1 = this.props.isWin === true ? green : red;
    const type = this.setType(this.props.team1);
    return (
      <div onClick={this.handleClick}
        className={"currentHistory " + this.props.classN + "__currentHistory" + this.props.iter}
      >
        <div className={this.props.classN + "__currentHistory-wrap"}>
          <div className={this.props.classN + "__history-team1"}>
            {this.props.team1.map((player, i) =>
              <Avatar2
                classN={this.props.classN + "__history-avatar2"}
                key={i.toString(36) + i}
                src={player.photo}
              />
            )}
          </div>
          <div className={this.props.classN + "__history-score"}>{this.props.score}</div>
          <div className={this.props.classN + "__history-time"}>{getTime(this.props.timestamp)}</div>
          <div className={this.props.classN + "__history-team2"}>
            {this.props.team2.map((player, i) =>
              <Avatar2
                classN={this.props.classN + "__history-avatar2"}
                key={i.toString(36) + i}
                src={player.photo}/>)}
          </div>
        </div>
        <div className="currentHistory-outline"/>
      <div className="currentHistory-background" style={{background: background1}}/>
        <DetailedInf isOpen={isOpen} type={type}/>
      </div>
    )
  }
}

const History = (props) => {
  const display = props.visibility ? {display: "block"} : {display: "none"}
  let currentDate = '';
  let output = [], tmp = [];
  output.push(
    <div key={"columns"} className={props.classN + "__columns"}>
      <p className={props.classN + "__colums-column1"}>Команда1</p>
      <p className={props.classN + "__colums-column2"}>Счет</p>
      <p className={props.classN + "__colums-column3"}>Время</p>
      <p className={props.classN + "__colums-column4"}>Команда2</p>
    </div>
  )
  for (let i = 0; i < props.response.length; i ++) {
    if (currentDate !== getDate(props.response[i].timestamp)) {
      currentDate = getDate(props.response[i].timestamp);
      if (i !== 0) {
        output.push(
          <div key={i}
            className={"currentDay " + props.classN + "__currentDay"}
            >
            {tmp}
          </div>
        );
      }
      output.push(<div
        key={i.toString(36) + i + "delimiter"}
        className={props.classN + "__delimiter"}>Дата: {currentDate}
        </div>
      )
      tmp = [];
    }
    tmp.push(
      <Histories
      key={i.toString(36) + i}
      iter={i}
      classN={props.classN}
      isWin={props.response[i].isWin}
      timestamp={props.response[i].timestamp}
      score={props.response[i].score}
      team1={props.response[i].team1}
      team2={props.response[i].team2}
      />
    )
  }

  output.push(
    <div key={props.response.length}
      className={"currentDay " + props.classN + "__currentDay"}
      >
      {tmp}
    </div>
  );

  return (
    <div style={display}
      className={"history " + props.classN + "__history"}
      >
      {output}
    </div>
  );
}

export default History;
