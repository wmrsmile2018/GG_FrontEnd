import React, {Component} from 'react';
import Cross from '../../public/svg/cross.svg';

class RadioB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      visibility: [],
      blue: '#83E4E4',
      yellow: '#FFD074',
      color: '#83E4E4',
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

  componentDidMount() {
    let visibility = [];
    for(let i = 0; i < this.props.values.length; i++) {
      visibility.push("hidden")
    }
    this.setState({
      visibility: visibility
    })
  }

  handleOnClick(e) {
    e.persist();
    const index = e.target.dataset.index;
    let {visibility, value} = this.state;
    value = e.target.dataset.value;
    for(let i = 0; i < this.props.values.length; i++) {
      visibility[i] = "hidden";
    }
    visibility[index] = "visible";
    this.setState({
      color: this.state.yellow,
      visibility: visibility,
      value: value
    })
    if (this.props.actionOnClick !== null) {
      this.props.actionOnClick()
    }
    if (this.props.actionOnChange !== null) {
      this.props.actionOnChange(value);
    }
  }

  render() {

    const Elements = this.props.values.map((element, index) =>
    <div key={index} data-value={element}
      onClick={this.handleOnClick} data-index={index}
      className={"radioB " + this.props.classN + "__radioB" + index}>
      <p data-index={index} data-value={element}>{element}</p>
      { this.props.isInput ?

        <input
          style={{backgroundColor: this.state.color}}
          onMouseOut={this.handleOnMouseOut}
          onMouseOver={this.handleOnMouseOver}
          type={this.props.type}
          value={this.props.value}
          onClick={this.handleOnClick}
        />

         :

        <div data-index={index} data-value={element} className={this.props.classN + "__outline"}>
          <img src={Cross} style={{visibility: this.state.visibility[index]}} alt=""/>
        </div>
      }
    </div>
  )
    return(
      <div className={this.props.classN + "__radioB"}>
        {Elements}
      </div>
    )
  }
}

export default RadioB;
