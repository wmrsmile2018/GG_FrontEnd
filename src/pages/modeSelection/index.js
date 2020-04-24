import React, {Component} from 'react';
import {Radio} from 'antd';
import InputS from '../../components/inputSubmit/index';
import Leaders from '../../components/leaders/index';

const tmpObjs = [
  {photo: "http://placehold.it/32x32", display1: "none", display2: "block", outline: null, nickname: "nagibator1234"},
  // {"photo": "http://placehold.it/32x32"},
  // {"photo": "http://placehold.it/32x32"},
]

class ModeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGame: ''
    }
  }

  render() {
    return(
      <div className={"modeSelection " + this.props.classN + "__modeSelection"}>
        <Leaders classN={this.props.classN + "__modeSelection"} objs={tmpObjs}/>
        <div className={this.props.classN + "__modeSelection-mode"}>
          <form>
            <div className={this.props.classN + "__modeSelection-mode"}>
              Выберите типа игры
              <br/>
              <Radio.Group onChange={null} mode={this.state.value}>
                <Radio.Button value={"1:1"}>1:1</Radio.Button>
                <Radio.Button value={"2:2"}>2:2</Radio.Button>
              </Radio.Group>
              <br/>
              Выберите призовой фонд
              <br/>
              <Radio.Group onChange={null} prizePool={this.state.value}>
                <Radio.Button value={"20Р"}>20Р</Radio.Button>
                <Radio.Button value={"100Р"}>100Р</Radio.Button>
                <Radio.Button value={"200Р"}>200Р</Radio.Button>
                <Radio.Button value={"500Р"}>500Р</Radio.Button>
                <br/>
                <Radio.Button value={"1000Р"}>1000Р</Radio.Button>
                <Radio.Button value={"2000Р"}>2000Р</Radio.Button>
                <Radio.Button value={"4000Р"}>4000Р</Radio.Button>
              </Radio.Group>
              <br/>
              Выполните все правила для начала игры
              <div className={this.props.classN + "__modeSelection-rules"}>
                <div className={this.props.classN + "__modeSelection-rule1"}>1</div>
                <div className={this.props.classN + "__modeSelection-rule2"}>2</div>
                <div className={this.props.classN + "__modeSelection-rule3"}>3</div>
              </div>
            </div>
            <InputS type="submit" value="Играть"/>
          </form>
        </div>
      </div>
    )
  }
}

export default ModeSelection;
