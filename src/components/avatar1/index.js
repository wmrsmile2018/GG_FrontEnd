import React, {Component} from 'react';
// аватар с контуром в виде щита
class Avatar1 extends Component {
  render() {
    const { classN, w, h, display } = this.props;
    return (
      <div className={"avatar1 " + classN}>
        <div className={"outline " + classN + "__outline"}
          width={w}
          height={h}
          style={{display: display}}
          alt=""
          >
          <div className={"avatar " +  classN + "__avatar"}>
            <img className={"photo " +  classN + "__avatar"}
              src={"http://tympanus.net/codrops-playground/assets/images/cssref/properties/mask-image/field.jpg"}
              width={w}
              height={h}
              alt=""
            />
            <div className={"shield " +  classN + "__border"}/>
          </div>
        </div>
        <div className={"outlineBorder " + classN + "__outlineBorder"}></div>
      </div>
    )
  }
}

export default Avatar1;
