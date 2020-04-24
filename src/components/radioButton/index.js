import React, {Component} from 'react';
import Cross from '../../public/svg/cross.svg';

class RadioB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      visibility: []
    }
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.persist();
    const index = e.target.dataset.index;
    let {visibility, value} = this.state;
    value = e.target.dataset.value;
    for(let i = 0; i < this.props.values.length; i++) {
      visibility[i] = "hidden";
    }
    visibility[index] = "visible";
    this.setState({
      visibility: visibility,
      value: value
    })
    this.props.actionOnChange(value);
  }

  render() {
    const Elements = this.props.values.map((element, index) =>
    <div key={index} data-value={element}
      onClick={this.handleClick} data-index={index}
      className={"radioB " + this.props.classN + "__radioB" + index}>
      <p data-index={index} data-value={element}>{element}</p>
      <div data-index={index} data-value={element} className={this.props.classN + "__outline"}>
        <img src={Cross} style={{visibility: this.state.visibility[index]}} alt=""/>
      </div>
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
