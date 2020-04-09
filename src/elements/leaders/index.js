import React, {Component} from 'react';
import Avatar1 from '../avatar1/index';
import Outline from '../../public/svg/outline.svg'


class Leaders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TopPlayers = this.props.objs.map((element, index) =>
      <Avatar1
        key={index}
        classN=""
        img=""
        svg={Outline}
        w="100px"
        h="100px"
        />
    );

    return(
      <div className={"leaders " + this.props.classN + "-leaders"}>
        {TopPlayers}
      </div>
    )
  }
}

export default Leaders;
