import React, {Component} from 'react'
import PropTypes from 'prop-types';

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

  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    display: PropTypes.string,
    classN: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    actionOnClick: PropTypes.func

  }

  static defaultProps = {
    children: null,
    active: false,
    display: '',
    classN: '',
    name: '',
    value: '',
    actionOnClick: () => {},
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

  handleOnClick(e) {
    this.setState({
      color: this.state.yellow,
      isActivity: true,
    })
    if (this.props.actionOnClick) {
      this.props.actionOnClick(e)
    }
  }

  render() {

    const { active, display, classN, name, value } = this.props;
    const color = active ? this.state.yellow : this.state.color;
    const shadow = active ? "0px 0px 33px 2px #FFD600" : "none";
    return(
      <div
        style={{display: display}}
        className={"inputS " + classN + "__inputS"}
        onMouseOut={this.handleOnMouseOut}
        onMouseOver={this.handleOnMouseOver}
        onClick={this.handleOnClick}
        data-name={name}
      >
        <p style={{color: color}}
          data-name={name}
        >
          {value}
        </p>
        <div style={{boxShadow: shadow}}
          className={"inputS-shadow " + classN + "__inputS-shadow"}
          data-name={name}
        />
        <div
          style={{background: color}}
          className={"inputS-outline " + classN + "__inputS-outline"}
          data-name={name}
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
