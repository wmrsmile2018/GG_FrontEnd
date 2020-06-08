import React, {Component} from 'react';
import Avatar1 from '../avatar1/index';
import Comment from '../comment/index';
import Pictures from '../pictures/index';
import LikeSvg from '../../public/svg/like.svg';
import CommentSvg from '../../public/svg/comment.svg';
import DislikeSvg from '../../public/svg/dislike.svg';

// https://codepen.io/desandro/pen/vLeBLV

const obj = [
  {
    "number": 1,
    "id_user": "5e9a4cd2fe7027e72d6e9c91",
    "id_comment": "5e9a4cd2383e6c8e75ee625f",
    "nick_name": "Nagibator123_milli",
    "text": "asdajsdasjdlkjaslkdjlkasjdljasljdlasjldjaskldjklasjdlksajdlksajldjaksldjlaksjdklajsldjalskdjlkajlkasfhahsflashflhasfjgfhasfhaslfhaslkhflkashflkhaklsfhkalshflkahsfklhalfskhaklsfhaklshfaklshfklashflahsjfkahfklashflashfklasf",
    "likes": 310,
    "dislikes": 10,
    "photo": "http://placehold.it/32x32"
  },
  {
    "number": 1,
    "id_user": "5e9a4cd23b2e072fd78fe92a",
    "id_comment": "5e9a4cd2ee16da560e5e2717",
    "nick_name": "Nagibator123_milli",
    "text": "asdajsdasjdlkjaslkdjlkasjdljasljdlasjldjaskldjklasjdlksajdlksajldjaksldjlaksjdklajsldjalskdjlkajlkasfhahsflashflhasfjgfhasfhaslfhaslkhflkashflkhaklsfhkalshflkahsfklhalfskhaklsfhaklshfaklshfklashflahsjfkahfklashflashfklasf",
    "likes": 310,
    "dislikes": 10,
    "photo": "http://placehold.it/32x32"
  },
  {
    "number": 1,
    "id_user": "5e9a4cd26e3076d84051ff37",
    "id_comment": "5e9a4cd24421368c29ddb25c",
    "nick_name": "Nagibator123_milli",
    "text": "asdajsdasjdlkjaslkdjlkasjdljasljdlasjldjaskldjklasjdlksajdlksajldjaksldjlaksjdklajsldjalskdjlkajlkasfhahsflashflhasfjgfhasfhaslfhaslkhflkashflkhaklsfhkalshflkahsfklhalfskhaklsfhaklshfaklshfklashflahsjfkahfklashflashfklasf",
    "likes": 310,
    "dislikes": 10,
    "photo": "http://placehold.it/32x32"
  },

];

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    let {display} = this.state;
    if(display === 'none') {
      display = 'block';
    } else {
      display = 'none';
    }
    this.setState({
      display: display
    })
  }

  render() {
    return(
      <div data-id={this.props.idPost} className="wrap news__wrap">
        <div data-id={this.props.idPost} className={"post " + this.props.classN + "__post"}>
          <div className={this.props.classN + "__post-header"}>
            <div className={this.props.classN + "__post-leftSide"}>
              <Avatar1
                classN={this.props.classN + "__post-avatar1"}
                avatar={this.props.img}
              />
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
              <Pictures photos={this.props.photos} classN={this.props.classN} className={this.props.classN + "__post-photos"}/>
            </div>
          </div>
          <div className={this.props.classN + "__footer"}>
            <div className={this.props.classN + "__post-likes"}>
              <img src={LikeSvg} width="20" height="20" alt=""/>
              <p>{this.props.likes}</p>
            </div>
            <div className={this.props.classN + "__post-dislikes"}>
              <img src={DislikeSvg} width="20" height="20" alt=""/>
              <p>{this.props.dislikes}</p>
            </div>
            <div className={this.props.classN + "__post-comments"} onClick={this.handleOnClick}>
              <img src={CommentSvg} width="20" height="20" alt=""/>
              <p>{this.props.comments}</p>
            </div>

          </div>
        </div>
        <Comment obj={obj} classN={this.props.classN} style={this.state.display}/>
      </div>
    )
  }
}

export default Post;
