import React, {Component} from 'react';
import TextIF from '../../elements/textInputField/index';
import InputS from '../../elements/inputSubmit/index';

const patternPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
// наличие спец знаков, заглавной буквы, обычной буквы, цифры и от 6 символов

const Validate = (input, pattern) => {
  return pattern.test(input);
}

const RecoveryPasElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2 + "__"} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class RecoveryPas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stylePas: 'none',
      styleConfirmPas: 'none',
      password: '',
      confirmPassword: '',
    };
    this.updateDataP = this.updateDataP.bind(this);
    this.updateDataConfP = this.updateDataConfP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDataP(e) {
    console.log(e.target.value);
     this.setState({password: e.target.value});
  };

  updateDataConfP(e) {
    console.log(e.target.value);
     this.setState({confirmPassword: e.target.value});
  };

  handleSubmit(e) {
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
    e.preventDefault();
  }

  render() {
    return(
      <div className = "recoveryPas">
        <form onSubmit={this.handleSubmit}>
          <h1>Восстановление пароли</h1>
          <RecoveryPasElement
            classN1="recoveryPas__password"
            classN2="recoveryPas"
            actionOnChange={this.updateDataP} name="Введите новый пароль"
            type="text" display={this.state.stylePas}
            classN3="requestRecPas__error"
            text="Пароль не подходит"
          />
          <RecoveryPasElement
            classN1="recoveryPas__confirmPas"
            classN2="recoveryPas"
            actionOnChange={this.updateDataConfP} name="Повторите пароль"
            type="text" display={this.state.styleConfirmPas}
            classN3="requestRecPas__error"
            text="Пароли не совпадают"
          />
          <InputS type="submit" value="Далее" classN="recoveryPas"/>
        </form>
      </div>
    )
  }
}

export default RecoveryPas;
