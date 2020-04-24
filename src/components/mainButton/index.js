import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MainButton extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className={"mainButton " + this.props.classN + "__mainButton"}
      onClick={this.props.actionOnClick}
      style={{display: this.props.display}}
      >
        {this.props.text}
      </div>
    )
  }
}

export default MainButton;
