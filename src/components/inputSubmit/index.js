import React, {Component} from 'react'

class InputS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blue: '#83E4E4',
      yellow: '#FFD074',
      color: '#83E4E4',
      isActivity: false,
    }
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnMouseOver() {
      this.setState({
        color: this.state.yellow,
      })
  }

  handleOnMouseOut() {
    this.setState({
      color: this.state.blue,
    })
  }

  handleOnClick() {
    this.setState({
      color: this.state.yellow,
      isActivity: true,
    })
    if (this.props.actionOnClick) {
      this.props.actionOnClick()
    }
  }

  render() {

    const { active } = this.props;
    const color = active ? this.state.yellow : this.state.color;
    const shadow = active ? "0px 0px 33px 2px #FFD600" : "none";
    return(
      <div
        style={{display: this.props.display}}
        className={"inputS " + this.props.classN + "__inputS"}
        onMouseOut={this.handleOnMouseOut}
        onMouseOver={this.handleOnMouseOver}
        onClick={this.handleOnClick}
      >
        <p style={{color: color}}>{this.props.value}</p>
        <div style={{boxShadow: shadow}}
          className={"inputS-shadow " + this.props.classN + "__inputS-shadow"}/>
        <div
          style={{background: color}}
          className={"inputS-outline " + this.props.classN + "__inputS-outline"}
          >
        </div>
      </div>
    )
  }
}





//
// <input
//   style={{backgroundColor: this.state.color}}
//   type={this.props.type}
//   value={this.props.value}
//   onClick={this.handleOnClick}
// />
export default InputS;
