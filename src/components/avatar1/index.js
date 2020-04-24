import React, {Component} from 'react';
// аватар с контуром в виде щита
class Avatar1 extends Component {
  render() {
    return (
      <div className={"avatar1 " + this.props.classN}>
        <div className={"outline " + this.props.classN + "__outline"}
          width={this.props.w}
          height={this.props.h}
          style={{display: this.props.display}}
          alt=""
          >
          <div className={"avatar " +  this.props.classN + "__avatar"}>
            <img className={"photo " +  this.props.classN + "__avatar"}
              src={"http://tympanus.net/codrops-playground/assets/images/cssref/properties/mask-image/field.jpg"}
              width={this.props.w}
              height={this.props.h}
              alt=""
            />
            <div className={"shield " +  this.props.classN + "__border"}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Avatar1;
