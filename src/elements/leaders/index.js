import React, {Component} from 'react';
import Avatar1 from '../avatar1/index';



class Leaders extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const TopPlayers = this.props.objs.map((element, index) =>
      <div key={index} className="leader">
        <p className="leader__nickname" style={{display: element.display1}} >{element.nickname}</p>
        <Avatar1
          classN="leader"
          display="block"
          svg={element.outline}
          w="100px"
          h="100px"
          img={element.photo}
          />
        <p className="leader__nickname" style={{display: element.display2}} >{element.nickname}</p>
      </div>
    );

    return(
      <div className={"leaders " + this.props.classN + "-leaders"}>
        {TopPlayers}
      </div>
    )
  }
}

export default Leaders;
