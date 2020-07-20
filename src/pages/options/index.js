import React, {Component} from 'react';
import TextIF from '../../components/textInputField/index';
import RadioB from '../../components/radioButton/index';
import Avatar1 from '../../components/avatar1/index';
import placeholder from '../../public/images/placeholder.jpg';
import Cross from '../../public/svg/crossBlue.svg';
import getHistory from '../../modules/history';
import { setPath } from '../../actions/actionPath.js';
import { connect } from 'react-redux';

const DataElement = (props) => {
  return (
    <div className={`${props.classN1}_${props.classN2}`}>
      <TextIF classN={props.classN2} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class Options extends Component {
  state = {
    show: false,
    brightness: '100%',
  }

  componentDidMount = () => {
    this.props.setPath(getHistory().location.pathname);
  }

  handleOnMouseOver = () => {
    this.setState({
      show: true,
      brightness: '50%',
    })
  }

  handleOnMouseOut = () => {
    this.setState({
      show: false,
      brightness: '100%',
    })
  }

  render() {
    const { show, brightness } = this.state;
    // <TextIF classN="options" actionOnChange={null} name="Логин" type="text"/>
//
    return (
      <div className="options">
        <div className="options__avatar"
          onMouseOut={this.handleOnMouseOut}
          onMouseOver={this.handleOnMouseOver}
          >
          <Avatar1
            classN="_arena"
            avatar={placeholder}
            brightness={brightness}
          />
          <div className="options__changeAvatar"
            style={{display: show ? 'block' : 'none' }}
            >
            <img src={Cross} alt=""/>
          </div>
        </div>
        <div className="options__data">
          <div className="options__sex">
            <p className="options_title">Пол</p>
            <RadioB classN="options" actionOnChange={null}
              values={["мужской", "женский", "другое"]}
              actionOnClick={null}
            />
            <div style={{display: 'none'}} className="options__error">
              Выберите пол
            </div>
          </div>
          <DataElement
            classN1="phone"
            classN2="options"

            name="Телефон"
            type="text"
            display={"none"}
            classN3="options__phone-error options__error"
            text="неправильный номер телефона"
          />
          <DataElement
            classN1="email"
            classN2="options"
            name="Почта"
            type="text"
            display={"none"}
            classN3="options__email-error options__error"
            text="почта не подходит"
          />
        </div>
      </div>
    )
  }
}

export default connect(state => ({}), { setPath })(Options);
