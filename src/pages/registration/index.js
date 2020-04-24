import React, {Component} from 'react';
import { Select } from 'antd';
import TextIF from '../../components/textInputField/index';
import InputS from '../../components/inputSubmit/index';
import ButtonS from '../../components/buttonSubmit/index';
import RadioB from '../../components/radioButton/index';

//use Ref to decrease count code.

const { Option } = Select;

const patternPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
// наличие спец знаков, заглавной буквы, обычной буквы, цифры и от 6 символов
const patternLogin = /^(?!(?:\D*\d){})[a-z][\w-]{5,}$/i;
// снач буквы потом цифры от 6 знаков
const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const generatorDate = (min, max) => {
  var output = [];
  for (var i = max; i >= min; i --) {
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
      <TextIF classN={props.classN2 + "__"} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDataL = this.updateDataL.bind(this);
    this.updateDataP = this.updateDataP.bind(this);
    this.updateDataConfP = this.updateDataConfP.bind(this);
    this.updateDataE = this.updateDataE.bind(this);
    this.updateDataS = this.updateDataS.bind(this);
    this.updateDataD = this.updateDataD.bind(this);
    this.updateDataM = this.updateDataM.bind(this);
    this.updateDataY = this.updateDataY.bind(this);
  }

  updateDataL(e) {
     this.setState({login: e.target.value});
  };
  updateDataP(e) {
     this.setState({password: e.target.value});
  };
  updateDataConfP(e) {
     this.setState({confirmPassword: e.target.value});
  };
  updateDataE(e) {
     this.setState({email: e.target.value});
  };
  updateDataS(value) {
    this.setState({sex: value});
  };
  updateDataD(value) {
    this.setState({day: value})
  };
  updateDataM(value) {
    this.setState({month: value})
  };
  updateDataY(value) {
    this.setState({year: value})
  };


  handleSubmit(e) {
    if (!Validate(this.state.login, patternLogin)) {
      this.setState({styleLogin: "block"})
    } else {
      this.setState({styleLogin: "none"})
    }
    if (!Validate(this.state.password, patternPassword)) {
      this.setState({stylePas: "block"})
    } else {
      this.setState({stylePas: "none"})
    }
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({styleConfirmPas: "block"})
    } else {
       this.setState({styleConfirmPas: "none"})
    }
    if (!Validate(this.state.email, patternEmail)) {
      this.setState({styleEmail: "block"})
    } else {
      this.setState({styleEmail: "none"})
    }
    if (this.state.sex === '') {
      this.setState({styleSex: "block"})
    } else {
      this.setState({styleSex: "none"})
    }
    if(this.state.day === '' || this.state.month === '' || this.state.year === '') {
      this.setState({styleDate: "block"})
      } else {
      this.setState({styleDate: "none"})
      }
    e.preventDefault();
  }

  render() {
    const RegElementParametres = [
      {display: this.state.styleLogin, actionOnChange: this.updateDataL ,classN1: "registration__login", classN2: "registration", name: "Логин", type: "text", classN3: "registration__error", text: "Логин не подходит"},
      {display: this.state.stylePas, actionOnChange: this.updateDataP ,classN1: "registration__password", classN2: "registration", name: "Пароль", type: "password", classN3: "registration__error", text: "Пароль не подходит"},
      {display: this.state.styleConfirmPas, actionOnChange: this.updateDataConfP ,classN1: "registration__confirm-password", classN2: "registration", name: "Повторите пароль", type: "password", classN3: "registration__error", text: "Пароли не совпадают"},
    ]

    let days, months, years;
    days = generatorDate(1, 31);
    months = generatorDate(1, 12);
    years = generatorDate(1900, 2003);
// <RegElement classN1="" classN2="" update={} name="" type="" display={} classN3="" text=""/>
    const RegElements = RegElementParametres.map((element, index) =>
      <RegElement
        key={index}
        classN1={element.classN1}
        classN2={element.classN2}
        actionOnChange={element.actionOnChange}
        name={element.name}
        type={element.type}
        display={element.display}
        classN3={element.classN3}
        text={element.text}
      />
    )
    return (
      <div className="registration">
        <form onSubmit={this.handleSubmit}>
          <h1>Регистрация</h1>
          {RegElements}
          <div className="registration__date">
            <p className="registration_tittle">Дата рождения</p>
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
            <p className="registration_tittle">Пол</p>
            <RadioB classN="registration" actionOnChange={this.updateDataS}
              values={["Мужской", "Женский", "Другое"]} />
            <div style={{display: this.state.styleSex}} className="registration__error">
              Выберите пол
            </div>
          </div>
          <RegElement
            classN1="registration__email"
            classN2="registration"
            actionOnChange={this.updateDataE}
            name="Почта"
            type="text"
            display={this.state.styleEmail}
            classN3="registration__error"
            text="почта не подходит"
            />
          <InputS type="submit" classN="registration" value="Зарегистрироваться"/>
       </form>
       <div className="registration__signIn">
         <p className="registration__exist">Уже есть аккаунт?</p>
         <ButtonS classN="registration__button" text="Войти"/>
       </div>
     </div>
   )
  }
}

export default Registration;
