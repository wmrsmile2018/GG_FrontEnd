import React, {Component} from 'react'
import TextIF from '../../components/textInputField/index';
import InputS from '../../components/inputSubmit/index';
import ButtonS from '../../components/buttonSubmit/index';
import getHistory from '../../modules/history';
import { setPath } from '../../actions/actionPath.js';
import { connect } from 'react-redux';

const SignInElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2} actionOnChange={props.update} title={props.title} type={props.type} />
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

  componentDidMount() {
    this.props.setPath(getHistory().location.pathname);
  }

  render() {
    return (
      <div className = "signIn">
      <form onSubmit={this.handleSubmit}>
        <h1>Вход</h1>
        <SignInElement
          classN1="signIn__login"
          classN2="signIn"
          update={this.updateDataL}
          title="Логин"
          type="text"
          display={this.state.styleLogin}
          classN3="signIn__error"
          text="введите логин"
        />
        <SignInElement
          classN1="signIn__password"
          classN2="signIn"
          update={this.updateDataP}
          title="Пароль"
          type="text"
          display={this.state.stylePas}
          classN3="signIn__error"
          text="Введите пароль"
        />
        <InputS type="submit" classN="signIn">
          <p>Войти</p>
        </InputS>
      </form>
      <ButtonS classN="signIn_button" text="Забыли пароль?"/>
    </div>
    )
  }
}

export default connect(state => ({}), { setPath })(SignIn);
