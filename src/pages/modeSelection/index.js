import React, {Component} from 'react';
import InputS from '../../components/inputSubmit/index';
import Leaders from '../../components/leaders/index';
import ButtonGroup from '../../components/buttonGroup/index';

const tmpObjs = [
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "12345678901234567890nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "block", display2: "none", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", nickname: "nagibator1234"},
]

class ModeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGame: '',
      prize20P: false,
      prize100P: false,
      prize200P: false,
      prize500P: false,
      prize1000P: false,
      prize2000P: false,
      prize4000P: false,
      mode11: false,
      mode22: false,
    }
  }

  handleOnClickPrize = ({target}) => {
    let state = this.state;
    state['prize20P'] = false;
    state['prize100P'] = false;
    state['prize200P'] = false;
    state['prize500P'] = false;
    state['prize1000P'] = false;
    state['prize2000P'] = false;
    state['prize4000P'] = false;
    state[target.dataset['name']] = true;
    window.state = state;
    this.setState({
      ...state
    })
  }

  handleOnClickMode = ({target}) => {
    let state = this.state;
    state['mode11'] = false;
    state['mode22'] = false;
    state[target.dataset['name']] = true;
    window.state = state;
    this.setState({
      ...state
    })
  }

  render() {
    const { prize20P, prize100P, prize200P, prize500P, prize1000P, prize2000P,
      prize4000P, mode11 ,mode22 } = this.state;
    return(
      <div className="modeSelection">
        <div className="modeSelection__leaders">
          <div className="modeSelection__leaders-outline1">
            <div className="modeSelection__largeWing"></div>
            <div className="modeSelection__mediumWing"></div>
            <div className="modeSelection__smallWing"></div>
          </div>
          <div className="modeSelection__leaders-outline2">
            <div className="modeSelection__largeWing"></div>
            <div className="modeSelection__mediumWing"></div>
            <div className="modeSelection__smallWing"></div>
          </div>
          <Leaders objs={tmpObjs}/>
        </div>

        <div className="modeSelection__content">
          <form>
            <div className="modeSelection__mode">
              <p className="modeSelection__mode-tittle modeSelection-tittle">
                Выберите тип игры
              </p>
              <ButtonGroup classN="modeSelection">
                <InputS actionOnClick={this.handleOnClickMode} classN="modeSelection__mode" type="submit" name="mode11" value="1:1" active={mode11}/>
                <InputS actionOnClick={this.handleOnClickMode} classN="modeSelection__mode" type="submit" name="mode22" value="2:2" active={mode22}/>
              </ButtonGroup>

            </div>
            <div className="modeSelection__prize">
              <p className="modeSelection__prize-tittle modeSelection-tittle">
                Выберите призовой фонд
              </p>
              <ButtonGroup classN="modeSelection1">
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize20P" value="20 P" active={prize20P}/>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize100P" value="100 P" active={prize100P}/>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize200P" value="200 P" active={prize200P}/>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize500P" value="500 P" active={prize500P}/>
              </ButtonGroup>

              <ButtonGroup classN="modeSelection2">
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize1000P" value="1000 P" active={prize1000P}/>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize2000P" value="2000 P" active={prize2000P}/>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize4000P" value="4000 P" active={prize4000P}/>
              </ButtonGroup>

            </div>
            <div className="modeSelection__rules">
              <p className="modeSelection__rules-tittle modeSelection-tittle">
                Выполните все правила для начала игры
              </p>
              <div className="modeSelection__rules-content">
                <div className="modeSelection__rule1 modeSelection__rule">1</div>
                <div className="modeSelection__rule2 modeSelection__rule">2</div>
                <div className="modeSelection__rule3 modeSelection__rule">3</div>
              </div>
            </div>
            <InputS classN="modeSelection" type="submit" value="Играть"/>
          </form>
        </div>
      </div>
    )
  }
}

export default ModeSelection;
