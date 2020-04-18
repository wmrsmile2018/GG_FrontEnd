import React from 'react';
import './public/css/style.css'
import Reg from './pages/registration/index';
import SignIn from './pages/signIn/index';
import RequestRecPas from './pages/requestRecoveryPassword/index';
import RecoveryPas  from './pages/recoveryPassword/index';
import News from './pages/news/index';
import G from './public/images/g.png';

function App() {
  return (
    <div className="App">
      <img className="background_g1" src={G} height="458"/>
      <img className="background_g2" src={G} height="458"/>
      <News/>
    </div>
  );
}

export default App;
