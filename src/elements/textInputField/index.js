import React, {Component} from 'react';
import './../../public/css/textInputField.css';


class TextIF extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.props.updateData(e.target.value);
  }

  render() {
    return (
      <div className={"TextIF " + this.props.classN}>
        <label>
          <p className={this.props.classN + "__TextIF-p"}>{this.props.name}</p>
          <input type="text" onChange={(this.handleChange)}
            className={this.props.classN + "__TextIF-input"}/>
        </label>
      </div>
    )
  }
}


export default TextIF;
