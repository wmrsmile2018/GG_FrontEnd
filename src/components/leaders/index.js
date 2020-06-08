import React, {Component} from 'react';
import Avatar1 from '../avatar1/index';



class Leaders extends Component {

  render() {
    const TopPlayers = this.props.objs.map((element, index) =>
      <div key={index} className={"leader leader" + (1 + index)}>
        <p className="leader__nickname" style={{display: element.display1}} >{element.nickname}</p>
        <Avatar1
          classN="_leader"
          display="block"
          w="100px"
          h="100px"
          img={element.photo}
          />
        <p className="leader__nickname" style={{display: element.display2}} >{element.nickname}</p>
      </div>
    );

    return(
      <div className="leaders">
        {TopPlayers}
      </div>
    )
  }
}

export default Leaders;
