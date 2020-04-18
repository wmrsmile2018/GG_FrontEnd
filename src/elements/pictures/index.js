import React, {Component} from 'react';

const setNewSize = (size, count, index) => {
  let newSize = {
    width: 'auto',
    height: 'auto'
  }
  // let conditionOfSize =  count % 3 ? Math.ceil(count % 3) : 3
  const position = Math.ceil(index / 3);
  // const rows = Math.ceil(count / 3);
  const standartSize = 540 / 3 - 5 * 3;
  const lastSize = 540 / 5 - 5 * 5;
  if(position > 1) {
    newSize.width = lastSize;
    newSize.height = lastSize * 2 / 3
  } else {
    newSize.width = standartSize;
    newSize.height = standartSize * 2 / 3
  }

  // newSize.height = newSize.width / 3;
  // if (size.height/size.width > 1/4 &&  size.height/size.width < 4) {
  //   newSize.height = 150 * 3 / Math.trunc(1 + count / 3);
  // } else {
  //   newSize.height = 150 * 3 / Math.trunc(1 + count / 3);
  //   newSize.width = 150 * 3 / Math.trunc(1 + count / 3);
  // }
  return newSize;
}

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:{}
    };
  this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad({target}){
    let size = {
      width: target.width,
      height: target.height
    }
    let newSize = setNewSize(size, this.props.mapSize, this.props.index + 1)
    this.setState({
      size:{
        width: newSize.width,
        height: newSize.height
      }
    })
  }

  render() {
    return(
      <img
        src={this.props.src}
        onLoad={this.onImgLoad}
        width={this.state.size.width}
        height={this.state.size.height}
        alt=""
      />
    )
  }
}

class Pictures extends Component {
  render() {
    const Photos = this.props.photos.map((photo, index) =>
      <div key={index.toString(36) + index} width={1} className={"picture " + this.props.classN + "__pictures" + index}>
        <Picture index={index} key={index.toString(36) + index} src={photo.photo} mapSize={this.props.photos.length}/>
      </div>
    );
    return (
      <div className={"pictures " + this.props.classN + "__pictures"}>
        {Photos}
      </div>
    );
  }
}


export default Pictures;
