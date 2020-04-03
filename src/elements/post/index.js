import React, {Component} from 'react';
import Avatar1 from '../avatar1/index';
import Comment from '../comment/index';
import Pictures from '../pictures/index';
import placeholder from '../../public/images/placeholder.jpg';

// https://codepen.io/desandro/pen/vLeBLV


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div id={this.props.idPost} className={"post " + this.props.classN + "__post"}>
        <div className={this.props.classN + "__post-header"}>
          <div className={this.props.classN + "__post-leftSide"}>
            <Avatar1
              className={this.props.classN + "__post-avatar1"}
              avatar={this.props.img}
              classN={this.props.classN}
              w="20" h="20"/>
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
            <Pictures photos={this.props.photos} className={this.props.classN + "__post-photos"}/>
          </div>
        </div>
        <div className={this.props.classN + "__footer"}>
          <div className={this.props.classN + "__post-likes"}>
            <img src={placeholder} width="20" height="20" alt=""/>
            {this.props.likes}
          </div>
          <div className={this.props.classN + "__post-dislikes"}>
            <img src={placeholder} width="20" height="20" alt=""/>
            {this.props.dislikes}
          </div>
          <div className={this.props.classN + "__post-comments"}>
            <img src={placeholder} width="20" height="20" alt=""/>
            {this.props.comments}
            <Comment idPost={this.props.idPost} display="none"/>
          </div>
        </div>
        <div className={this.props.classN + "__comments"} display={"none"}>
        </div>
      </div>
    )
  }
}

export default Post;
