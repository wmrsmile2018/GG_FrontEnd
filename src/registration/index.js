import React, {Component} from 'react';
import { Select, Radio } from 'antd';
import TextIF from '../elements/textInputField/index';

const { Option } = Select;

const patternPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
// наличие спец знаков, заглавной буквы, обычной буквы, цифры и от 6 символов
const patternLogin = /^(?!(?:\D*\d){})[a-z][\w-]{5,}$/i;
// снач буквы потом цифры от 6 знаков
const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const generatorDate = (min, max) => {
  var output = [];
  for (var i = min; i <= max; i ++) {
    output.push(<Option key={i.toString(36) + i} value={i}>{i}</Option>)
  }
  return output;
}

const Validate = (input, pattern) => {
  return pattern.test(input);
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
  onChange = e => {
    this.setState({sex: e.target.value});
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
    if (this.state.confirmPassword != this.state.password) {
      this.setState({styleConfirmPas: "block"})
    } else {
       this.setState({styleConfirmPas: "none"})
    }
    if (!Validate(this.state.email, patternEmail)) {
      this.setState({styleEmail: "block"})
    } else {
      this.setState({styleEmail: "none"})
    }
    if (this.state.sex=='') {
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

    return (
      <div className = "registration" >
        <form onSubmit={this.handleSubmit}>

          <div className = "registration__div">
            <TextIF classN={"registration__login"} updateData={this.updateDataL} name={"login"} type="text"/>
            <div style={{display: this.state.styleLogin}} className="registration__login-error registration__error">
              Логин не подходит
            </div>
          </div>

          <div className = "registration__div">
            <TextIF classN={"registration__password"} updateData={this.updateDataP} name={"password"} type="text" />
            <div style={{display: this.state.stylePas}} className="registration__password-error registration__error">
              Пароль не подходит
            </div>
          </div>

          <div className = "registration__div">
            <TextIF classN={"registration__confirm-password"} updateData={this.updateDataConfP} name={"confirm password"} type="text" />
            <div style={{display: this.state.styleConfirmPas}} className="registration__password-error registration__error">
              Пароль не соответсвует
            </div>
          </div>

          <div className = "registration__div">
            <label>
              birthday
              <br/>
              <Select style={{ width: 120 }} allowClear> {days} </Select>
              <Select style={{ width: 120 }} allowClear> {months} </Select>
              <Select style={{ width: 120 }} allowClear> {years} </Select>
            </label>
            <div style={{display: this.state.styleDate}} className="registration__date-error registration__error">
              Выберите дату
            </div>
          </div>

          <div className = "registration__div">
            <label>
              sex
              <br/>
               <Radio.Group onChange={this.onChange} sex={this.state.value}>
                <Radio value={"male"}>A</Radio>
                <Radio value={"female"}>B</Radio>
                <Radio value={"another"}>C</Radio>
              </Radio.Group>
            </label>
            <div style={{display: this.state.styleSex}} className="registration__sex-error registration__error">
              Выберите пол
            </div>
          </div>

          <div className = "registration__div">
            <TextIF classN={"registration__email"} updateData={this.updateDataE} name={"email"} type="text" />
            <div style={{display: this.state.styleEmail}} className="registration__email registration__error">
              почта не подходит
            </div>
          </div>

         <input type="submit" value="Отправить" />
       </form>
     </div>
   )
  }
}

export default Registration;
