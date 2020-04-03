import React, {Component} from 'react'

const setNewSize = (size, count) => {
  let newSize = {
    width: 'auto',
    height: 'auto'
  }
  if (size.height/size.width > 1/4 &&  size.height/size.width < 4) {
    newSize.height = 150 * 1.5 / Math.trunc(1 + count / 3);
  } else {
    newSize.height = 150 * 1.5 / Math.trunc(1 + count / 3);
    newSize.width = 150 * 1.5 / Math.trunc(1 + count / 3);
  }
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
    let newSize = setNewSize(size, this.props.mapSize)
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
  constructor(props) {
       super(props);
     };
  render() {
    const Photos = this.props.photos.map((photo,i) =>
      <div key={i.toString(36) + i}>
        <Picture key={i.toString(36) + i} src={photo.photo} mapSize={this.props.photos.length}/>
      </div>
    );

    return (
      <div className={"pictures " + classN + "__pictures"}>
        {Photos}
      </div>
    );
  }
}


export default Pictures;
