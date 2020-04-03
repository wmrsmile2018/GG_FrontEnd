import React, {Component} from 'react'
import Avatar2 from '../../elements/avatar2/index'

const getDate = (unix_timestamp) => {
  const currentDate = new Date(unix_timestamp * 1000);
  return (currentDate.getDate() + "/" +
      (currentDate.getMonth() + 1)
      + "/" + currentDate.getFullYear());
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
      <div className={"history " + this.props.classN + "__history"} onClick={this.handleClick} style={{border: this.props.isWin === true ? green : red}}>
        pewpew
        <div className={this.props.classN + "__history-team1"}>
          {this.props.team1.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
        <div className={this.props.classN + "__history-score"}>{this.props.score}</div>
        <div className={this.props.classN + "__history-time"}></div>
        <div className={this.props.classN + "__history-team2"}>
          {this.props.team2.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
      </div>
    )
  }
}

const History = (props) => {
  let currentDate = '';
  let output = [];
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
      output.push(<div
        key={i.toString(36) + i + "delimiter"}
        className={props.classN + "__delimiter"}>Дата: {currentDate}
        </div>
      )
    }
    output.push(<Histories
      key={i.toString(36) + i}
      classN={props.classN}
      isWin={props.response[i].isWin}
      score={props.response[i].score}
      team1={props.response[i].team1}
      team2={props.response[i].team2}
      />)
  }
  return output;
}

export default History;
