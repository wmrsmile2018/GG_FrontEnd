import React, { Component, Fragment } from 'react';
import NewConversation from '../../public/svg/newСonversation.svg';
import placeholder from '../../public/images/placeholder.jpg';

class Chat extends Component {

  render() {
    return(
      <Fragment>
        <div className="header">
          <p className="title">Чат</p>
          <img src={NewConversation} alt=""/>
        </div>
        <div className="content">
          <ul className="dialogs">
            <li className="dialog">
              <div className="avatar">
                <img src={placeholder} alt=""/>
              </div>
              <div className="data">
                <p className="nickName">Nagibator123_milliasdsadsadasdasdasd</p>
                <p className="message">Идем в прифывфывфывфывфвфыв</p>
              </div>
            </li>
            <li className="dialog">
              <div className="avatar">
                <img src={placeholder} alt=""/>
              </div>
              <div className="data">
                <p className="nickName">Nagibator123_milliasdsadsadasdasdasd</p>
                <p className="message">Идем в прифывфывфывфывфвфыв</p>
              </div>
            </li>
            <li className="dialog">
              <div className="avatar">
                <img src={placeholder} alt=""/>
              </div>
              <div className="data">
                <p className="nickName">Nagibator123_milliasdsadsadasdasdasd</p>
                <p className="message">Идем в прифывфывфывфывфвфыв</p>
              </div>
            </li>
            <li className="dialog">
              <div className="avatar">
                <img src={placeholder} alt=""/>
              </div>
              <div className="data">
                <p className="nickName">Nagibator123_milliasdsadsadasdasdasd</p>
                <p className="message">Идем в прифывфывфывфывфвфыв</p>
              </div>
            </li>
            <li className="dialog">
              <div className="avatar">
                <img src={placeholder} alt=""/>
              </div>
              <div className="data">
                <p className="nickName">Nagibator123_milliasdsadsadasdasdasd</p>
                <p className="message">Идем в прифывфывфывфывфвфыв</p>
              </div>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Chat;
