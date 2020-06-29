import React, {Component} from 'react';
import { connect } from 'react-redux';

import InputS from '../../components/inputSubmit/index';
import ButtonGroup from '../../components/buttonGroup/index';

import getHistory from '../../modules/history';

import { setPath } from '../../actions/actionPath.js';

import Book from '../../public/svg/book.svg';
import Security from '../../public/svg/security.svg';
import Camera from '../../public/svg/camera.svg';

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

  componentDidMount() {
    this.props.setPath(getHistory().location.pathname);
  }

  handleOnClick() {
    getHistory().push('/hall-of-fame');
  }



  render() {
    const { prize20P, prize100P, prize200P, prize500P, prize1000P, prize2000P,
      prize4000P, mode11 ,mode22 } = this.state;


      // <div className="modeSelection__leaders"
      //   onClick={this.handleOnClick}
      //   >
      //   <div className="modeSelection__leaders-outline1">
      //     <div className="modeSelection__largeWing"></div>
      //     <div className="modeSelection__mediumWing"></div>
      //     <div className="modeSelection__smallWing"></div>
      //   </div>
      //   <div className="modeSelection__leaders-outline2">
      //     <div className="modeSelection__largeWing"></div>
      //     <div className="modeSelection__mediumWing"></div>
      //     <div className="modeSelection__smallWing"></div>
      //   </div>
      //   <Leaders objs={tmpObjs}/>
      // </div>

    return(
      <div className="modeSelection">

        <div className="modeSelection__content">
          <form>
            <div className="modeSelection__mode">
              <p className="modeSelection__mode-title modeSelection-title">
                Выберите тип игры
              </p>
              <ButtonGroup classN="modeSelection">
                <InputS actionOnClick={this.handleOnClickMode} classN="modeSelection__mode" type="submit" name="mode11" active={mode11}>
                  <p data-name="mode11">1:1</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickMode} classN="modeSelection__mode" type="submit" name="mode22" active={mode22}>
                  <p data-name="mode22">2:2</p>
                </InputS>
              </ButtonGroup>

            </div>
            <div className="modeSelection__prize">
              <p className="modeSelection__prize-title modeSelection-title">
                Выберите призовой фонд
              </p>
              <ButtonGroup classN="modeSelection1">
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize20P" active={prize20P}>
                  <p data-name="prize20P">20 P</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize100P" active={prize100P}>
                  <p data-name="prize100P">100 P</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize200P" active={prize200P}>
                  <p data-name="prize200P">200 P</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize500P" active={prize500P}>
                  <p data-name="prize500P">500 P</p>
                </InputS>
              </ButtonGroup>

              <ButtonGroup classN="modeSelection2">
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize1000P" active={prize1000P}>
                  <p data-name="prize1000P">1000 P</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize2000P" active={prize2000P}>
                  <p data-name="prize2000P">2000 P</p>
                </InputS>
                <InputS actionOnClick={this.handleOnClickPrize} classN="modeSelection__prize" type="submit" name="prize4000P" active={prize4000P}>
                  <p data-name="prize4000P">4000 P</p>
                </InputS>
              </ButtonGroup>

            </div>
            <div className="modeSelection__rules">
              <p className="modeSelection__rules-title modeSelection-title">
                Выполните все правила для начала игры
              </p>
              <div className="modeSelection__rules-content">
                <div className="modeSelection__rule1 modeSelection__rule">
                  <div className="modeSelection-outline"></div>
                  <div className="modeSelection-background"></div>
                  <div className="modeSelection-image">
                    <img src={Camera} alt=""/>
                  </div>
                </div>
                <div className="modeSelection__rule2 modeSelection__rule">
                  <div className="modeSelection-outline"></div>
                  <div className="modeSelection-background"></div>
                  <div className="modeSelection-image">
                    <img src={Book} alt=""/>
                  </div>
                </div>
                <div className="modeSelection__rule3 modeSelection__rule">
                  <div className="modeSelection-outline"></div>
                  <div className="modeSelection-background"></div>
                  <div className="modeSelection-image">
                    <img src={Security} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <InputS classN="modeSelection" type="submit" link="/arena">
              <p>Играть</p>
            </InputS>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => ({}), { setPath })(ModeSelection);
