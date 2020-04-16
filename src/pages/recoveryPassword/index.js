import React, {Component} from 'react';
import TextIF from '../../elements/textInputField/index';
import InputS from '../../elements/inputSubmit/index';

const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Validate = (input, pattern) => {
  return pattern.test(input);
}

const RecPasElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2} updateData={props.update} name={props.name} type={props.type} />
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
      styleEmail: 'none',
      email: ''
    };
    this.updateDataE = this.updateDataE.bind(this);
  }

  updateDataE = value => {
     this.setState({email: value});
  };

  handleSubmit = (e) => {
    if (!Validate(this.state.email, patternEmail)) {
      this.setState({styleEmail: "block"})
    } else {
      this.setState({styleEmail: "none"})
    }
    e.preventDefault();
  }
  render() {
    return(
    <div className = "recoveryPassword">
    <form onSubmit={this.handleSubmit}>
      <h1>Восстановление пароли</h1>
      <RecPasElement
        classN1="recoveryPassword__email"
        classN2="recoveryPassword"
        update={this.updateDataE} name="Введите почту"
        type="text" display={this.state.styleEmail}
        classN3="recoveryPassword__error"
        text="почта не подходит"
      />
      <InputS type="submit" value="Далее"/>
    </form>
    <p>На введенную вами электронную почту было <br/>отправленно письмо с ссылкой для входа в аккаунт</p>
  </div>
    )
  }
}

export default RecoveryPas;
