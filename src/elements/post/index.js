import React, {Component} from 'react';
// import Comment from '../comment/index';
import Avatar from '../avatar/index';
import Comment from '../comment/index';
import Picture from '../picture/index';
import placeholder from '../../public/images/placeholder.jpg';

// key={i.toString(36) + i}
class Pictures extends Component {
  constructor(props) {
       super(props);
       this.state = {
       }
     };
  render() {
    const Photos = this.props.photos.map((photo,i) =>
      <div key={i.toString(36) + i}>
        <Picture key={i.toString(36) + i} src={photo.photo} mapSize={this.props.photos.length}/>
      </div>
    );
    return (
      <div>
        {Photos}
      </div>
    )
  }
}


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div id={this.props.idPost} className={"Post " + this.props.classN + "__post"}>
        <div className={this.props.classN + "__post-header"}>
          <div className={this.props.classN + "__post-leftSide"}>
            <Avatar
              className={this.props.classN + "__post-avatar"}
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
            <Comment comments={this.props.comments} display="none"/>
          </div>
        </div>
        <div className={this.props.classN + "__comments"} display={"none"}>
        </div>
      </div>
    )
  }
}

export default Post;
