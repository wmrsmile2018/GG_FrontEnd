import React, { Component } from 'react';
import Card from 'react-credit-cards';
import InputS from '../inputSubmit/index';
import TextIF from '../textInputField/index';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../modules/payment";

import "react-credit-cards/es/styles-compiled.css";

class AddPaymentCard extends Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    }
     else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    }
     else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    console.log(target.name);
    console.log(target.value);
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };


  render() {
    const { name, number, expiry, cvc, focused } = this.state;
    const { visibility } = this.props;
window.a = this.state;

    const Parametres = [
      {classN: "addPaymentCard", type: "tel", name: "number", actionOnChange: this.handleInputChange,
        placeholder: "Card Number", title: "Номер карты"},
      {classN: "addPaymentCard", type: "text", name: "name", actionOnChange: this.handleInputChange,
        placeholder: "Name", title: "Владелец карты"},
      {classN: "addPaymentCard", type: "tel", name: "expiry", actionOnChange: this.handleInputChange,
        placeholder: "Date", title: "Срок действия карты"},
      {classN: "addPaymentCard", type: "tel", name: "cvc", actionOnChange: this.handleInputChange,
        placeholder: "CVC/CVV", title: "CVC/CVV"},
    ]

    return (
      <div className="addPaymentCard" style={{display: visibility ? 'block' : 'none'}}>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />

        <form  onSubmit={this.handleSubmit}>
          {Parametres.map((element, index) =>
            <TextIF
              key={index}
              classN={element.classN}
              type={element.type}
              name={element.name}
              actionOnChange={element.actionOnChange}
              placeholder={element.placeholder}
              title={element.title}
              value={this.state[element.name]}
              />
          )}

           <InputS type="submit" classN="addPaymentCard">
             <p>Привязать карту</p>
           </InputS>
        </form>

      </div>
    )
  }
}
export default AddPaymentCard;
