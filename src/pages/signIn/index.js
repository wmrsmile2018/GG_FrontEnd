import React, {Component} from 'react'
import TextIF from '../../elements/textInputField/index';
import InputS from '../../elements/inputSubmit/index';
import ButtonS from '../../elements/buttonSubmit/index';

const SignInElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2} updateData={props.update} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylePas: 'none',
      styleLogin: 'none',
      password: '',
      login: ''
    };
    this.updateDataP = this.updateDataP.bind(this);
    this.updateDataL = this.updateDataL.bind(this);
  }
  updateDataL = value => {
     this.setState({login: value});
  };
  updateDataP = value => {
     this.setState({password: value});
  };

  handleSubmit = (e) => {
    console.log(this.state.password, this.state.login)
    if (this.state.login === '') {
      this.setState({styleLogin: "block"})
    } else {
      this.setState({styleLogin: "none"})
    }
    if (this.state.password === '') {
      this.setState({stylePas: "block"})
    } else {
      this.setState({stylePas: "none"})
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className = "registration">
      <form onSubmit={this.handleSubmit}>
        <SignInElement
          classN1="signIn__div-login"
          classN2="signIn__login"
          update={this.updateDataL}
          name="login"
          type="text"
          display={this.state.styleLogin}
          classN3="signIn__login-error signIn__error"
          text="введите логин"
          />
        <SignInElement
          classN1="signIn__div-password"
          classN2="signIn__login"
          update={this.updateDataP}
          name="password"
          type="text"
          display={this.state.stylePas}
          classN3="signIn__password-error signIn__error"
          text="Введите пароль"
          />
        <InputS type="submit" value="Войти"/>
      </form>
      <div className="signIn__div-button">
        <ButtonS classN="SignIn_button" text="Забыли пароль?"/>
      </div>
    </div>
    )
  }
}

export default SignIn;
