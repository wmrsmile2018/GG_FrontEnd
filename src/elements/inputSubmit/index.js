import React, {Component} from 'react'

class InputS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blue: '#83E4E4',
      yellow: '#FFD074',
      color: '#83E4E4',
    }
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
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

  render() {
    return(
      <div
        className={"inputS " + this.props.classN + "__inputS"}
      >
        <p style={{"color": this.state.color}}>{this.props.value}</p>
        <input
          style={{"backgroundColor": this.state.color}}
          onMouseOut={this.handleOnMouseOut}
          onMouseOver={this.handleOnMouseOver}
          type={this.props.type}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default InputS;
