import React, { Component } from 'react';
import Card from 'react-credit-cards';
import InputS from '../inputSubmit/index';
import TextIF from '../textInputField/index';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
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

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
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
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    const Parametres = [
      {classN: "addPaymentCard", type: "tel", name: "number", actionOnChange: this.handleInputChange,
        pattern: "[\d| ]{16}", placeholder: "Card Number", title: "Номер карты"},
      {classN: "addPaymentCard", type: "text", name: "name", actionOnChange: this.handleInputChange,
        placeholder: "Name", title: "Владелец карты"},
      {classN: "addPaymentCard", type: "tel", name: "expiry", actionOnChange: this.handleInputChange,
        pattern: "\d\d/\d\d", placeholder: "Name", title: "Владелец карты"},
      {classN: "addPaymentCard", type: "tel", name: "cvc", actionOnChange: this.handleInputChange,
        pattern: "\d{3,4}", placeholder: "CVC/CVV", title: "CVC/CVV"},
    ]

    return (
      <div className="addPaymentCard">
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
              pattern={element.pattern}
              placeholder={element.placeholder}
              title={element.title}
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
