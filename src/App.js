import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Reg from './pages/registration/index';
import SignIn from './pages/signIn/index';
import RequestRecPas from './pages/requestRestorePassword/index';
import RestorePas  from './pages/restorePassword/index';
import News from './pages/news/index';
import G from './public/images/g.png';

import Arena from './pages/arena/index';
import HallOfFame from './pages/hallOfFame/index';
import ModeSelection from './pages/modeSelection/index';
import Option from './pages/options/index';
import PersonalPage from './pages/personalPage/index';

import Header from './components/header/index';
import LeftBar from './components/leftBar/index';
import RightBar from './components/rightBar/index';
import DND from './components/DND/index';
import Chat from './components/chat/index';

import getHistory from './modules/history';

import { setPath } from './actions/actionPath.js';


import ReactModal from 'react-modal-resizable-draggable';


const Error = () => {
  return (
    <div>404 NOT FOUND</div>
  )
}

class App extends Component {
  state = {
    showChat: false,
    showRightBar: false,
  }

  componentDidMount() {
    if(getHistory().location.pathname === '/') {
      getHistory().push('/news');
    }
  }

  handleOnClickChat = () => {
    const { showChat } = this.state;
    this.setState({
      showChat: !showChat,
    })
  }

  render() {
    const { showChat } = this.state;

    return (
      <div className="App">
        <ReactModal
        className="chat"
        isOpen={showChat}
        >
           <Chat/>
        </ReactModal>
        <div className="App-content">
          <div className="left">
            <LeftBar/>
          </div>
          <div className="center">

            <div className="background">
              <img className="background_g1" src={G} height="458" alt=""/>
              <img className="background_g2" src={G} height="458" alt=""/>
            </div>
            <div className="header">
              <Header/>
            </div>
            <div className="content">
              <Switch>
                <Route path="/signup" component={Reg}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/restore/new-password" component={RestorePas}/>
                <Route path="/restore/request" component={RequestRecPas}/>
                <Route path="/news" component={News}/>

                <Route path="/arena" component={Arena}/>
                <Route path="/hall-of-fame" component={HallOfFame}/>
                <Route path="/mode-selection" component={ModeSelection}/> // доделать треугольники и рамку
                <Route path="/personal-page" component={PersonalPage}/>
                <Route path="/options" component={Option}/>
                <Route path="*" component={Error}/>
              </Switch>
            </div>
          </div>
          <RightBar actionOnClick={this.handleOnClickChat}/>
        </div>
    </div>
    )
  }
}

export default connect(state => ({
  path: state.path,
}))(App);


//
// <div className="App">
//   <div className="chat-modal">
//     <DND>
//       <div className="chat">
//         <Chat></Chat>
//       </div>
//     </DND>
//   </div>
//   <div className="App-content">
//     <div className="left">
//       <LeftBar/>
//     </div>
//     <div className="center">
//
//       <div className="background">
//         <img className="background_g1" src={G} height="458" alt=""/>
//         <img className="background_g2" src={G} height="458" alt=""/>
//       </div>
//       <div className="header">
//         <Header/>
//       </div>
//       <div className="content">
//         <Switch>
//           <Route path="/signup" component={Reg}/>
//           <Route path="/signin" component={SignIn}/>
//           <Route path="/restore/new-password" component={RestorePas}/>
//           <Route path="/restore/request" component={RequestRecPas}/>
//           <Route path="/news" component={News}/>
//
//           <Route path="/arena" component={Arena}/>
//           <Route path="/hall-of-fame" component={HallOfFame}/>
//           <Route path="/mode-selection" component={ModeSelection}/> // доделать треугольники и рамку
//           <Route path="/personal-page" component={PersonalPage}/>
//           <Route path="/options" component={Option}/>
//           <Route path="*" component={Error}/>
//         </Switch>
//       </div>
//     </div>
//     <RightBar actionOnClick={this.handleOnClickChat}/>
//   </div>
// </div>
