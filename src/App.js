import React from 'react';
import './public/css/style.css'
import Reg from './pages/registration/index';
import SignIn from './pages/signIn/index';
import RecoveryPas from './pages/recoveryPassword/index';
import G from './public/images/g.png';
// <Reg/>
function App() {
  return (
    <div className="App">
      <img className="background_g1" src={G} height="458"/>
      <img className="background_g2" src={G} height="458"/>
      <RecoveryPas/>
    </div>
  );
}

export default App;
