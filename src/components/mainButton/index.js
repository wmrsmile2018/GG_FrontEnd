import React, {Component} from 'react';

class MainButton extends Component {
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
