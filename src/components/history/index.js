import React, {Component} from 'react'
import Avatar2 from '../../components/avatar2/index'

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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

  render(){
    const red = "1px solid #EB5757";
    const green = "1px solid #83E4E4";
    return (
      <div className={"currentHistory " + this.props.classN + "__currentHistory" + this.props.iter} onClick={this.handleClick} style={{border: this.props.isWin === true ? green : red}}>
        <div className={this.props.classN + "__history-team1"}>
          {this.props.team1.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
        <div className={this.props.classN + "__history-score"}>{this.props.score}</div>
        <div className={this.props.classN + "__history-time"}>{getTime(this.props.timestamp)}</div>
        <div className={this.props.classN + "__history-team2"}>
          {this.props.team2.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
      </div>
    )
  }
}

const History = (props) => {
  const display = props.visibility ? {display: "block"} : {display: "none"}
  console.log(display);
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
      output.push(
        <div key={i}
          className={"currentDay " + props.classN + "__currentDay"}
          >
          {tmp}
        </div>
      );
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
