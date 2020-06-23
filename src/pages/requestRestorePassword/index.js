import React, {Component} from 'react';
import TextIF from '../../components/textInputField/index';
import InputS from '../../components/inputSubmit/index';
import getHistory from '../../modules/history';
import { setPath } from '../../actions/actionPath.js';
import { connect } from 'react-redux';

const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Validate = (input, pattern) => {
  return pattern.test(input);
}

const ReqResPasElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2 + "__"} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class RequestResPas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styleEmail: 'none',
      email: ''
    };
    this.updateDataE = this.updateDataE.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDataE(e) {
    console.log(e.target.value);
     this.setState({email: e.target.value});
  };

  handleSubmit(e) {
    if (!Validate(this.state.email, patternEmail)) {
      this.setState({styleEmail: "block"})
    } else {
      this.setState({styleEmail: "none"})
    }
    e.preventDefault();
  }

  componentDidMount() {
    this.props.setPath(getHistory().location.pathname);
  }

  render() {
    return(
      <div className = "requestRecPas">
        <form onSubmit={this.handleSubmit}>
          <h1>Восстановление пароля</h1>
          <ReqResPasElement
            classN1="requestRecPas__email"
            classN2="requestRecPas"
            actionOnChange={this.updateDataE} name="Введите почту"
            type="text" display={this.state.styleEmail}
            classN3="requestRecPas__error"
            text="почта не подходит"
          />
          <InputS type="submit" value="Далее" classN="requestRecPas"/>
          <p className="requestRecPas__text">На введенную вами электронную почту было <br/>отправленно письмо с ссылкой для входа в аккаунт</p>
        </form>
      </div>
    )
  }
}

export default connect(state => ({}), { setPath })(RequestResPas);
