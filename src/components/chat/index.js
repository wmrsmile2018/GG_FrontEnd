import React, { Component, Fragment } from 'react';
import NewConversation from '../../public/svg/newСonversation.svg';
import placeholder from '../../public/images/placeholder.jpg';
import Chat from './chat';


class ModalForm extends Component {
  state = {
    showChats: [],
  }

  handleOnCLick = ({ target }) => {
    console.log('hello');
    let { showChats } = this.state;
    const index = target.dataset['index'];
    if (showChats.includes(index)) {
      showChats = showChats.filter(val => val !== index)
    } else {
      showChats.push(index);
    }
    this.setState({
      showChats
    })
  }

  handleOnClose = (index) => {
    let { showChats } = this.state;
    showChats = showChats.filter(val => val !== index)
    this.setState({
      showChats: showChats
    })
  }

  render() {
    const { showChats } = this.state;
    return(
      <Fragment>
        <div className="header">
          <p className="title">Чат</p>
          <img src={NewConversation} alt=""/>
        </div>
        <div className="content">
          <ul className="dialogs">
            <li className="dialog">
              <div className="avatar" data-index="1" onClick={this.handleOnCLick}>
                <img src={placeholder} alt="" data-index="1"/>
              </div>
              <div className="data" data-index="1" onClick={this.handleOnCLick}>
                <p className="nickName" data-index="1">
                  Nagibator123_milliasdsadsadasdasdasd
                </p>
                <p className="message" data-index="1">
                  Идем в прифывфывфывфывфвфыв
                </p>
              </div>
              <Chat showChat={showChats.includes("1")} onClose={this.handleOnClose} index="1"/>
            </li>
            <li className="dialog" data-index="2">
              <div className="avatar" data-index="2" onClick={this.handleOnCLick}>
                <img src={placeholder} alt="" data-index="2"/>
              </div>
              <div className="data" data-index="2" onClick={this.handleOnCLick}>
                <p className="nickName" data-index="2">
                  Nagibator123_milliasdsadsadasdasdasd
                </p>
                <p className="message" data-index="2">
                  Идем в прифывфывфывфывфвфыв
                </p>
              </div>
              <Chat showChat={showChats.includes("2")} onClose={this.handleOnClose} index="2"/>
            </li>
            <li className="dialog" data-index="3">
              <div className="avatar" data-index="3" onClick={this.handleOnCLick}>
                <img src={placeholder} alt="" data-index="3"/>
              </div>
              <div className="data" data-index="3" onClick={this.handleOnCLick}>
                <p className="nickName" data-index="3">
                  Nagibator123_milliasdsadsadasdasdasd
                </p>
                <p className="message" data-index="3">
                  Идем в прифывфывфывфывфвфыв
                </p>
              </div>
              <Chat showChat={showChats.includes("3")} onClose={this.handleOnClose} index="3"/>
            </li>
            <li className="dialog" data-index="4">
              <div className="avatar" data-index="4" onClick={this.handleOnCLick}>
                <img src={placeholder} alt="" data-index="4"/>
              </div>
              <div className="data" data-index="4" onClick={this.handleOnCLick}>
                <p className="nickName" data-index="4">
                  Nagibator123_milliasdsadsadasdasdasd
                </p>
                <p className="message" data-index="4">
                  Идем в прифывфывфывфывфвфыв
                </p>
              </div>
              <Chat showChat={showChats.includes("4")} onClose={this.handleOnClose} index="4"/>
            </li>
            <li className="dialog" data-index="5">
              <div className="avatar" data-index="5" onClick={this.handleOnCLick}>
                <img src={placeholder} alt="" data-index="5"/>
              </div>
              <div className="data" data-index="5" onClick={this.handleOnCLick}>
                <p className="nickName" data-index="5">
                  Nagibator123_milliasdsadsadasdasdasd
                </p>
                <p className="message" data-index="5">
                  Идем в прифывфывфывфывфвфыв
                </p>
              </div>
              <Chat showChat={showChats.includes("5")} onClose={this.handleOnClose} index="5"/>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default ModalForm;
