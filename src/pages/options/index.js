import React, {Component} from 'react';
import { Radio } from 'antd';
import TextIF from '../../components/textInputField/index';

const DataElement = (props) => {
  return (
    <div className={props.classN1}>
      <TextIF classN={props.classN2} actionOnChange={props.actionOnChange} name={props.name} type={props.type} />
      <div style={{display: props.display}} className={props.classN3}>
        {props.text}
      </div>
    </div>
  );
}

class Options extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="options">
        <div className="options__avatar">
        </div>
        <div className="options__data">
          <DataElement
            classN1="options__div-login"
            classN2="options"
            actionOnChange={null}
            name="Логин"
            type="text"
            display={"block"}
            classN3="options__login-error options__error"
            text="Логин не подходит"
          />
          <DataElement
            classN1="options__div-password"
            classN2="options"
            actionOnChange={null}
            name="Пароль"
            type="text"
            display={"block"}
            classN3="options__password-error options__error"
            text="Пароль не подходит"
          />
          <div className = "registration__div-sex">
            <p>sex</p>
             <Radio.Group onChange={null} sex={null}>
              <Radio value={"male"}>A</Radio>
              <Radio value={"female"}>B</Radio>
              <Radio value={"another"}>C</Radio>
            </Radio.Group>
            <div style={{display: "block"}} className="registration__sex-error registration__error">
              Выберите пол
            </div>
          </div>
          <DataElement
            classN1="options__div-phone"
            classN2="options"
            actionOnChange={null}
            name="Телефон"
            type="text"
            display={"block"}
            classN3="options__phone-error options__error"
            // text="неправильный номер телефона"
          />
          <DataElement
            classN1="options__div-email"
            classN2="options"
            actionOnChange={null}
            name="Почта"
            type="text"
            display={"block"}
            classN3="options__email-error options__error"
            text="почта не подходит"
          />
        </div>
      </div>
    )
  }
}

export default Options;
