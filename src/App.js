import React from 'react';
import { Switch, Route } from "react-router-dom";

import './public/css/style.css';

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

const Error = () => {
  return (
    <div>404</div>
  )
}

function App() {
  return (
    <div className="App">
      <img className="background_g1" src={G} height="458" alt=""/>
      <img className="background_g2" src={G} height="458" alt=""/>
      <Switch>
        <Route path="/signup" component={Reg}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/restore/new-password" component={RestorePas}/>
        <Route path="/restore/request" component={RequestRecPas}/>
        <Route path="/news" component={News}/>

        <Route path="/arena" component={Arena}/>
        <Route path="/hall-of-fame" component={HallOfFame}/>
        <Route path="/mode-selection" component={ModeSelection}/>
        <Route path="/options" component={Option}/>
        <Route path="/personal-page" component={PersonalPage}/>

        <Route path="*" component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
