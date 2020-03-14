import React, {Component} from 'react';

import './../../public/css/textInputField.css';

class TextIF extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({value: e.target.value})
      this.props.updateData(e.target.value);
  }

  render() {
    return (
      <div className={"TextIF " + this.props.classN + "__TextIF"}>
        <input type="text" onChange={(this.handleChange)} />
      </div>
    )
  }
}

export default TextIF;
