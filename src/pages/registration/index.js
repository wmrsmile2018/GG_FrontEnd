import React, {Component} from 'react';
import { Select } from 'antd';
import dayjs from 'dayjs';

import TextIF from '../../components/textInputField/index';
import InputS from '../../components/inputSubmit/index';
import ButtonS from '../../components/buttonSubmit/index';
import RadioB from '../../components/radioButton/index';

import getHistory from '../../modules/history';

import { setPath } from '../../redux/actions/actionPath';
import { signUp } from '../../redux/actions/actionSignUp';
import { connect } from 'react-redux';



// login, password, email, birthday, creationDate, sex, typeUser
const { Option } = Select;

const patternPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
// наличие спец знаков, заглавной буквы, обычной буквы, цифры и от 6 символов
const patternLogin = /^(?!(?:\D*\d){})[a-z][\w-]{5,}$/i;
// снач буквы потом цифры от 6 знаков
const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const generatorDate = (min, max) => {
  const output = [];
  for (let i = max; i >= min; i --) {
    output.push(<Option key={i.toString(36) + i} value={i}>{i}</Option>)
  }
  return output;
}

const Validate = (input, pattern) => {
  return pattern.test(input);
}

const RegElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF
        type={props.type}
        classN={props.classN2}
        actionOnChange={props.actionOnChange}
        name={props.name}
        value={props.value}
        title={props.title}
        />
      <div style={{display: props.display}} className={`${props.classN2}__error`}>
        {props.text}
      </div>
    </div>
  );
}

class Registration extends Component {
  state = {
    styleLogin: 'none',
    stylePas: 'none',
    styleConfirmPas: 'none',
    styleEmail: 'none',
    styleDate: 'none',
    styleSex: 'none',
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
    day: '',
    month: '',
    year: '',
    sex: '',
  };

  handleOnChange = ({target}) => {
    this.setState({ [target.name]: target.value });
  }

  updateDataS = (value) => {
    let sex;
    if (value === 'Мужской') {
      sex = 'male';
    } else if (value === 'Женский') {
      sex = 'female';
    } else {
      sex = 'another'
    }
    this.setState({sex});
  }

  updateDataD = (value) => {
    this.setState({day: value})
  }

  updateDataM = (value) => {
    this.setState({month: value})
  }

  updateDataY = (value) => {
    this.setState({year: value})
  }

  componentDidMount = () => {
    this.props.setPath(getHistory().location.pathname);
  }


  handleSubmit = (e) => {
    let {login, password, confirmPassword, email,
      sex, day, month, year, styleLogin, stylePas, styleConfirmPas,
      styleEmail, styleSex, styleDate } = this.state;

    styleLogin = !Validate(login, patternLogin) ? "block" : "none";
    stylePas = !Validate(password, patternPassword) ? "block" : "none";
    styleConfirmPas = confirmPassword !== password ? "block" : "none";
    styleEmail = !Validate(email, patternEmail) ? "block" : "none";
    styleSex = sex === '' ? "block" : "none";
    styleDate = day === '' || month === '' || year === '' ? "block" : "none";



    this.setState({styleLogin, stylePas, styleConfirmPas, styleEmail, styleSex, styleDate})
    if ((styleLogin + stylePas + styleConfirmPas + styleEmail +
       styleSex + styleDate).indexOf("block") === -1) {
      const creationDate = new Date().getTime();
      const birthday = dayjs(`${year}-${month}-${day}`).unix() * 1000;
      const data = {login: login, password: password, email: email, birthday: birthday,
        creationDate: creationDate, sex: sex, typeUser: "user"}
      this.props.signUp(data)
    }

    e.preventDefault();
  }

  render() {
    const { login, password, confirmPassword, email, day, month, year, sex,
       styleLogin, stylePas, styleConfirmPas, styleEmail } = this.state;

    const days = generatorDate(1, 31);
    const months = generatorDate(1, 12);
    const years = generatorDate(1900, 2003);

    const RegElementParametres = [
      {display: styleLogin, value: login,
        classN1: "registration__login", title: "Логин",
        type: "text", text: "Логин не подходит", name: "login"
      },
      {display: stylePas, value: password,
        classN1: "registration__password", title: "Пароль",
        type: "password", text: "Пароль не подходит", name: "password"
      },
      {display: styleConfirmPas, value: confirmPassword,
        classN1: "registration__confirm-password", text: "Пароли не совпадают",
        type: "password", title: "Повторите пароль", name: "confirmPassword"
      },
    ]

    return (
      <div className="registration">
        <form onSubmit={this.handleSubmit}>
          <h1>Регистрация</h1>
          {RegElementParametres.map((element, index) =>
              <RegElement
                key={index}
                classN1={element.classN1}
                classN2="registration"
                actionOnChange={this.handleOnChange}
                title={element.title}
                type={element.type}
                display={element.display}
                text={element.text}
                name={element.name}
                value={element.value}
              />
            )
          }

          <div className="registration__date">
            <p className="registration_title">Дата рождения</p>
            <div className="registration__dateSelector">
              <Select style={{ width: 80 }} onChange={this.updateDataD} > {days} </Select>
              <Select style={{ width: 80 }} onChange={this.updateDataM} > {months} </Select>
              <Select style={{ width: 80 }} onChange={this.updateDataY} > {years} </Select>
            </div>
            <div style={{display: this.state.styleDate}} className="registration__error">
              Выберите дату
            </div>
          </div>

          <div className="registration__sex">
            <p className="registration_title">Пол</p>
            <RadioB classN="registration" actionOnChange={this.updateDataS}
              values={["Мужской", "Женский", "Другое"]}
              actionOnClick={null}
            />
            <div style={{display: this.state.styleSex}} className="registration__error">
              Выберите пол
            </div>
          </div>

          <RegElement
            classN1="registration__email"
            classN2="registration"
            actionOnChange={this.handleOnChange}
            title="Почта"
            type="text"
            display={styleEmail}
            text="почта не подходит"
            name="email"
            value={email}
            />
          <InputS type="submit" classN="registration" actionOnClick={this.handleSubmit}>
            <p>Зарегистрироваться</p>
          </InputS>
       </form>
       <div className="registration__signIn">
         <p className="registration__exist">Уже есть аккаунт?</p>
         <ButtonS classN="registration__button" text="Войти"/>
       </div>
     </div>
   )
  }
}

export default connect(state => ({}), { setPath, signUp })(Registration);
