import React, {Component} from 'react';
// import Switch from "react-switch";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { connect } from 'react-redux';

import TextIF from '../../components/textInputField/index';
import RadioB from '../../components/radioButton/index';
import Avatar1 from '../../components/avatar1/index';
import placeholder from '../../public/images/placeholder.jpg';
import Cross from '../../public/svg/crossBlue.svg';
import getHistory from '../../modules/history';
import { setPath } from '../../redux/actions/actionPath.js';

const DataElement = (props) => {
  return (
    <div className={`${props.classN1}_${props.classN2}`}>
      <TextIF classN={props.classN2} value={props.value} title={props.title} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
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
    checked: false,
    login: '',
    password: '',
    telephone: '',
    mail: '',
  }

  componentDidMount = () => {
    this.props.setPath(getHistory().location.pathname);
  }

  handleOnChange = (checked) => {
    this.setState({ checked });
  }

  handleOnEdit = ({target}) => {
    // console.log(target.name);
    // console.log(target.value);
    this.setState({
      [target.name]: target.value
    })
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
    const { show, brightness, login, password, telephone, mail } = this.state;
    // <TextIF classN="options" actionOnChange={null} name="Логин" type="text"/>
//console.log();
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
          <DataElement
            classN1="login"
            classN2="options"
            name="login"
            type="text"
            display="none"
            classN3="options__login-error options__error"
            text="неправильный номер телефона"
            title="Логин"
            actionOnChange={this.handleOnEdit}
            value={login}
          />
          <DataElement
            classN1="password"
            classN2="options"
            name="password"
            type="text"
            display="none"
            classN3="options__password-error options__error"
            text="неправильный номер телефона"
            title="Пароль"
            actionOnChange={this.handleOnEdit}
            value={password}
          />
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
            name="telephone"
            type="text"
            display="none"
            classN3="options__phone-error options__error"
            text="неправильный номер телефона"
            title="Телефон"
            actionOnChange={this.handleOnEdit}
            value={telephone}
          />
          <DataElement
            classN1="email"
            classN2="options"
            name="mail"
            type="text"
            display="none"
            classN3="options__email-error options__error"
            text="почта не подходит"
            title="Почта"
            actionOnChange={this.handleOnEdit}
            value={mail}
          />
          <FormControl>
            <FormControlLabel
               labelPlacement="start"
              label="Двухфакторная аутентификация"
              control={<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />}
            />
          </FormControl>
        </div>
      </div>
    )
  }
}

export default connect(state => ({}), { setPath })(Options);
