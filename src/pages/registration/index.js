import React, {Component} from 'react';
import { Select, Radio } from 'antd';
import TextIF from '../../elements/textInputField/index';
import InputS from '../../elements/inputSubmit/index';
import ButtonS from '../../elements/buttonSubmit/index';

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
      <TextIF classN={props.classN2} updateData={props.update} name={props.name} type={props.type} />
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

  updateDataL = value => {
     this.setState({login: value});
  };
  updateDataP = value => {
     this.setState({password: value});
  };
  updateDataConfP = value => {
     this.setState({confirmPassword: value});
  };
  updateDataE = value => {
     this.setState({email: value});
  };
  updateDataS = e => {
    this.setState({sex: e.target.value});
  };
  updateDataD = value => {
    this.setState({day: value})
  };
  updateDataM = value => {
    this.setState({month: value})
  };
  updateDataY = value => {
    this.setState({year: value})
  };
  handleSubmit = (e) => {
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
    e.preventDefault();
  }

  render() {
    let days, months, years;
    days = generatorDate(1, 31);
    months = generatorDate(1, 12);
    years = generatorDate(1900, 2003);
// <RegElement classN1="" classN2="" update={} name="" type="" display={} classN3="" text=""/>
    return (
      <div className = "registration">
        <form onSubmit={this.handleSubmit}>
          <RegElement
            classN1="registration__div-login"
            classN2="registration__login"
            update={this.updateDataL}
            name="login"
            type="text"
            display={this.state.styleLogin}
            classN3="registration__login-error registration__error"
            text="Логин не подходит"
            />
          <RegElement
            classN1="registration__div-password"
            classN2="registration__password"
            update={this.updateDataP}
            name="password"
            type="text"
            display={this.state.stylePas}
            classN3="registration__password-error registration__error"
            text="Пароль не подходит"
            />
          <RegElement
            classN1="registration__div-confirm-password"
            classN2="registration__confirm-password"
            update={this.updateDataConfP} name="confirm password"
            type="text"
            display={this.state.styleConfirmPas}
            classN3="registration__confirm-password-error registration__error"
            text="Пароль не соответсвует"
            />
          <div className = "registration__div-date">
            <label>
              birthday
              <br/>
              <Select style={{ width: 80 }} onChange={this.updateDataD} > {days} </Select>
              <Select style={{ width: 80 }} onChange={this.updateDataM} > {months} </Select>
              <Select style={{ width: 80 }} onChange={this.updateDataY} > {years} </Select>
            </label>
            <div style={{display: this.state.styleDate}} className="registration__date-error registration__error">
              Выберите дату
            </div>
          </div>
          <div className = "registration__div-sex">
            <label>
              sex
              <br/>
               <Radio.Group onChange={this.updateDataS} sex={this.state.value}>
                <Radio value={"male"}>A</Radio>
                <Radio value={"female"}>B</Radio>
                <Radio value={"another"}>C</Radio>
              </Radio.Group>
            </label>
            <div style={{display: this.state.styleSex}} className="registration__sex-error registration__error">
              Выберите пол
            </div>
          </div>
          <RegElement
            classN1="registration__div-email"
            classN2="registration__email"
            update={this.updateDataE}
            name="email" type="text"
            display={this.state.styleEmail}
            classN3="registration__email registration__error"
            text="почта не подходит"
            />
         <InputS type="submit" value="Зарегистрироваться"/>
       </form>
       <div className="registration__div-button">
         <p>Уже есть аккаунт?</p>
         <ButtonS classN="registration_button" text="Войти"/>
       </div>
     </div>
   )
  }
}

export default Registration;
