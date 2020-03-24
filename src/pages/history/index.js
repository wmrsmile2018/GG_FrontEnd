import React, {Component} from 'react';

const Statics = () => {
  return (
      <div> </div>
  );
}

class Histories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div> </div>
    )
  }
}

const Finances = () => {
  return (
    <div> </div>
  );
}

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="History">
        <button/>
        <Finances/>
        <Histories />
        <Histories />
      </div>
    )
  }
}

export default History;
