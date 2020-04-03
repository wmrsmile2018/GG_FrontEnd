import React, {Component} from 'react';
import placeholder from '../../public/images/placeholder.jpg';
// аватар с контуром в виде щита
class Avatar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <img className={"outline " + this.props.classN + "__outline"}
          src={placeholder}
          width={this.props.w}
          height={this.props.h}
          alt=""/>
        <br/>
        <img className={"avatar " +  this.props.classN + "__avatar"}
          src={placeholder} width={this.props.w}
          height={this.props.h}
          alt=""/>
      </div>
    )
  }
}

export default Avatar1;