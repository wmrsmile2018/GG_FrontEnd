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
          {this.props.name}
          <br/>
          <input type="text" onChange={(this.handleChange)} />
        </label>
      </div>
    )
  }
}


export default TextIF;
