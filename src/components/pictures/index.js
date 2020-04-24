import React, {Component, Fragment} from 'react';
import Portal from '../portal/index';
import PrevSvg from '../../public/svg/previous.svg'
import NextSvg from '../../public/svg/next.svg'

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
      size:{},
      showPortal: false
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
      <Fragment>
        <img
          src={this.props.src}
          onLoad={this.onImgLoad}
          width={this.state.size.width}
          height={this.state.size.height}
          alt=""
          onClick={this.props.actionOnClick}
          data-index={this.props.index}
        />
      </Fragment>
    )
  }
}

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortal: false,
      currentSrc: '',
      index: 0,
    }
    this.prevPicture = React.createRef();
    this.nextPicture = React.createRef();
    this.currentSrc = React.createRef();
    this.pictures = React.createRef();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOnClickPrev = this.handleOnClickPrev.bind(this);
    this.handleOnClickNext = this.handleOnClickNext.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {

    if (this.nextPicture.current && !this.nextPicture.current.contains(e.target) &&
        this.currentSrc.current && !this.currentSrc.current.contains(e.target) &&
        this.prevPicture.current && !this.prevPicture.current.contains(e.target) &&
        this.pictures.current && !this.pictures.current.contains(e.target)) {
        this.setState({
          showPortal: false
        });
        console.log("outside");
    }
  }

  handleOnClick(e) {
    e.persist()
    this.setState({
      showPortal: true,
      currentSrc: e.target.currentSrc,
      index: e.target.dataset["index"],
    })
  }

  handleOnClickPrev() {
    let {index} = this.state;
    index = +index === 0 ? this.props.photos.length - 1 : +index - 1;
    this.setState({
      currentSrc: this.props.photos[index].photo,
      index: index,
    })
  }

  handleOnClickNext() {
    let {index} = this.state;
    index = +index === this.props.photos.length - 1 ? 0 : +index + 1;
    this.setState({
      currentSrc: this.props.photos[index].photo,
      index: index,
    })
  }

  render() {
    const Photos = this.props.photos.map((photo, index) =>
      <div key={index.toString(36) + index} data-index={index}
        className={"picture " + this.props.classN + "__pictures" + index}
      >
        <Picture index={index} key={index.toString(36) + index}
          src={photo.photo} mapSize={this.props.photos.length}
          actionOnClick={this.handleOnClick}
        />
      </div>
    );
    return (
      <Fragment>
        <div ref={this.pictures}
          className={"pictures " + this.props.classN + "__pictures"}>
          {Photos}
        </div>
        {
          this.state.showPortal ?

          <Portal>
            <div
              className={"portal " + this.props.classN + "__portal"}
            >
              <div className={this.props.classN + "__portal-wrap"}>
                <img className={this.props.classN + "__portal-prevPicture"}
                  src={PrevSvg} onClick={this.handleOnClickPrev}
                  ref={this.prevPicture} alt=""
                />
                <img className={this.props.classN + "__portal-picture"}
                  src={this.state.currentSrc} onClick={this.handleClickOutside}
                  ref={this.currentSrc} alt=""
                />
                <img className={this.props.classN + "__portal-nextPicture"}
                  src={NextSvg} onClick={this.handleOnClickNext}
                  ref={this.nextPicture} alt=""
                />
              </div>
            </div>
          </Portal>

          :

          null
        }
      </Fragment>
    );
  }
}


export default Pictures;
