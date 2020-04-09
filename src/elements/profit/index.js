import React, {Component} from 'react'
import Avatar2 from '../../elements/avatar2/index'

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

class Profits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  //
  // handleClick() {
  //   if (this.state.isOpen === false) {
  //       this.setState({
  //         isOpen: true
  //       })
  //   } else {
  //     this.setState({
  //       isOpen: false
  //     })
  //   }
  // }

  render(){
    const red = "1px solid #EB5757";
    const green = "1px solid #B2DF8A";
    return (
      <div className={"profit " + this.props.classN + "__profit" + this.props.iter} style={{border: this.props.isWin === true ? green : red}}>
        <div className={this.props.classN + "__profit-team1"}>
          {this.props.team1.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
        <div className={this.props.classN + "__profit-bet"}>{this.props.score}</div>
        <div className={this.props.classN + "__profit-team2"}>
          {this.props.team2.map((player, i) => <Avatar2 key={i.toString(36) + i} src={player.photo}/>)}
        </div>
        <div className={this.props.classN + "__profit-time"}>{getTime(this.props.timestamp)}</div>
        <div className={this.props.classN + "__profit-profit"}>{this.props.profit}</div>
      </div>
    )
  }
}

const Profit = (props) => {
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
    output.push(<Profits
      key={i.toString(36) + i}
      iter={i}
      classN={props.classN}
      isWin={props.response[i].isWin}
      timestamp={props.response[i].timestamp}
      score={props.response[i].score}
      team1={props.response[i].team1}
      team2={props.response[i].team2}
      profit={props.response[i].profit}
      />)
  }
  return output;
}

export default Profit;
