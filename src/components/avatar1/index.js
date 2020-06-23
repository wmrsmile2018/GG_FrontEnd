import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// аватар с контуром в виде щита
class Avatar1 extends Component {

  static propTypes = {
    classN: PropTypes.string,
    display: PropTypes.string,
    brightness: PropTypes.string,
  }

  static defaultProps = {
    classN: '',
    display: 'block',
    brightness: '100%',
  }

  render() {
    const { classN, display, brightness } = this.props;
    const Image = styled.img`
      filter: brightness(${brightness});
    `;

    return (
      <div className={"avatar1 " + classN}>
        <div className={"outline " + classN + "__outline"}
          style={{display: display}}
          alt=""
          >
          <div className={"avatar " +  classN + "__avatar"}>
            <Image className={"photo " +  classN + "__avatar"}
              src={"http://tympanus.net/codrops-playground/assets/images/cssref/properties/mask-image/field.jpg"}
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
