import React, {Component} from 'react';
import Comment from '../comment/index';

import placeholder from '../../public/images/placeholder.jpg';

const Photos = (props) => {
  return (
    <div></div>
  );
}

const Avatar = (props) => {
  return (
    <div></div>
  );
}

class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // };
  }

  render() {
    return(
      <div id={this.props.idPost} className={"Post " + this.props.classN + "__post"}>
        <div className={this.props.classN + "__post-header"}>
          <div className={this.props.classN + "__post-leftSide"}>
            <Avatar classN={this.props.classN + "__post-avatar"} img={this.props.img}/>
            <p className={this.props.classN + "__post-author"}>
              {this.props.author}
            </p>
          </div>
          <div className={this.props.classN + "__post-rightSide"}>
            <p className={this.props.classN + "__post-date"}>
              {this.props.date}
            </p>
            <p className={this.props.classN + "__post-time"}>
              {this.props.time}
            </p>
          </div>
        </div>
        <div className={this.props.classN + "__post-content"}>
          <div className={this.props.classN + "__post-text"}>
            {this.props.text}
          </div>
          <div className={this.props.classN + "__post-photos"}>
            <Photos id={this.props.idPhotos} className={this.props.classN + "__post-photos"}/>
          </div>
        </div>
        <div className={this.props.classN + "__footer"}>
          <div className={this.props.classN + "__post-likes"}>
            <img src={placeholder} width="20" height="20"/>
          </div>
          <div className={this.props.classN + "__post-dislikes"}>
            <img src={placeholder} width="20" height="20"/>
          </div>
          <div className={this.props.classN + "__post-comments"}>
            <img src={placeholder} width="20" height="20"/>
          </div>
        </div>
        <div className={this.props.classN + "__comments"} display={"none"}>
        </div>
      </div>
    )
  }
}

export default Post;
