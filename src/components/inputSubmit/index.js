import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class InputS extends Component {
  state = {
    blue: '#83E4E4',
    yellow: '#FFD074',
    color: '#83E4E4',
    isActivity: false,
  }
  
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    display: PropTypes.string,
    classN: PropTypes.string,
    name: PropTypes.string,
    actionOnClick: PropTypes.func,
    image1: PropTypes.bool,
    image2: PropTypes.bool,
    link: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    active: false,
    display: '',
    classN: '',
    name: '',
    actionOnClick: () => {},
    image1: false,
    image2: false,
    link: '',
  }

  handleOnMouseOver = () => {
    this.setState({
      color: this.state.yellow,
    })
  }

  handleOnMouseOut = () => {
    this.setState({
      color: this.state.blue,
    })
  }

  handleOnClick = (e) => {
    this.setState({
      color: this.state.yellow,
      isActivity: true,
    })
    if (this.props.actionOnClick) {
      this.props.actionOnClick(e)
    }
  }


  render() {
    const { active, display, classN, name, image1, image2, children, link } = this.props;
    const color = active ? this.state.yellow : this.state.color;
    const shadow = active ? "0px 0px 33px 2px #FFD600" : "none";

    const displayLeft = image1 ? 'block' : 'none';
    const displayRight = image2 ? 'block' : 'none';
    // <img src={image1} alt=""/>

    return(
      <div
        style={{display: display}}
        className={"inputS " + classN + "__inputS"}
        onMouseOut={this.handleOnMouseOut}
        onMouseOver={this.handleOnMouseOver}
        onClick={this.handleOnClick}
        data-name={name}
      >
        <div className="inputS_imgLeft"
          style={{display: displayLeft}}
        >
          <div className="image"
            style={{background: color}}
            >
          </div>
        </div>
        <div style={{color: color}}
          data-name={name}
          className={"inputS-children "}
          >
          {children}

        </div>
        <div className="inputS_imgRight"
          style={{display: displayRight}}
        >
            <div className="image"
              style={{background: color}}
              >
            </div>
        </div>
        <div style={{boxShadow: shadow}}
          className={"inputS-shadow " + classN + "__inputS-shadow"}
          data-name={name}
        />
      { link === '' ?
        <div
          style={{background: color}}
          className={"inputS-outline " + classN + "__inputS-outline"}
          data-name={name}
        >
        </div>
        :
        <Link to={`${link}`}>
          <div
            style={{background: color}}
            className={"inputS-outline " + classN + "__inputS-outline"}
            data-name={name}
          >
          </div>
          <div
            className={"inputS-background " + classN + "__inputS-background"}
            data-name={name}
          >
          </div>
        </Link>
      }
      </div>
    )
  }
}





//
// <input
//   style={{backgroundColor: this.state.color}}
//   type={this.props.type}
//   value={this.props.value}
//   onClick={this.handleOnClick}
// />
export default InputS;
