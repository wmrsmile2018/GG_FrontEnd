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
      <div className={"avatar1 " + this.props.classN + "__avatar1"}>
        <img className={"outline " + this.props.classN + "__outline"}
          src={this.props.svg}
          width={this.props.w}
          height={this.props.h}
          style={{display: this.props.display}}
          alt=""
          />
        <img className={"avatar " +  this.props.classN + "__avatar"}
          src={this.props.img}
          width={this.props.w}
          height={this.props.h}
          alt=""
          />
      </div>
    )
  }
}

export default Avatar1;
