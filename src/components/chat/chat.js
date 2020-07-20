import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal-resizable-draggable';
import PropTypes from 'prop-types';

import TextIF from '../textInputField/index';

const user_id1 = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10";

class Chat extends Component {
  state = {
    author: '',
    date: '',
    message: '',
    idChat: 'a0eebc10-1c0b-1ef8-bb1d-1bb1bd111a10',
    idUser: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10',
    type: 'general',
    show: true,
    ws: null,
  }

  static propTypes = {
    showChat: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  }

  componentDidMount = () => {
    this.setState({
      ws: this.props.webSocket
    })
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { message, idChat, idUser, type, ws } = this.state;
    const msg = { TypeChat: type, Message: message, IdChat: idChat, IdUser: idUser};
    const data = JSON.stringify(msg)
    ws.send(data);
  }

  handleOnCLick = () => {
    const { onClose, index } = this.props;
    onClose(index)
  }

  render() {
    const { message } = this.state;
    const { showChat } = this.props;
    return (
      <ReactModal
      className="chat"
      isOpen={showChat}
      top={100}
      left={200}
      >
         <Fragment>
           <div className="chat__header">
             <button onClick={this.handleOnCLick}>X</button>
           </div>
           <div className="chat__content">
             <div className="chat__messages">
               <div className="chat__message">Привет</div>
               <div className="chat__message">Как дела?</div>
               <div className="chat__message">не хочешь вместе попробовать сыграть ?</div>
               <div className="chat__message">го го го го</div>
             </div>
           </div>
           <div className="chat__footer">
             <form onSubmit={this.handleOnSubmit}>


               <TextIF
                 classN="chat"
                 actionOnChange={this.handleOnChange}
                 name="message"
                 type="text"
                 value={message}
                />

               <button type="submit">></button>
             </form>
           </div>
         </Fragment>
      </ReactModal>
    )
  }
}

export default connect(state => ({
  webSocket: state.ws.webSocket,
}))(Chat);
