import React, {Component} from 'react';

class ButtonS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blue: "#83E4E4",
      gray: "#F2F2F2",
      color: "#F2F2F2"
    }
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }

  handleOnMouseOver() {
      this.setState({
        color: this.state.blue,
      })
  }

  handleOnMouseOut() {
    this.setState({
      color: this.state.gray,
    })
  }

  render() {
    return(
      <button onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut} className={"buttonS "+ this.props.classN} style={{"color": this.state.color}}>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonS;
