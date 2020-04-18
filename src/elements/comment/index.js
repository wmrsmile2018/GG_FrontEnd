import React, {Component} from 'react';
import LikeSvg from '../../public/svg/like.svg';
import DislikeSvg from '../../public/svg/dislike.svg';
import Avatar2 from '../avatar2/index';
import placeholder from '../../public/images/placeholder.jpg';
import SendSvg from '../../public/svg/send.svg';
import ContentEditable from 'react-contenteditable';

class Comment extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      placeholder: 'Написать комментарий...',
      blue: '#83E4E4',
      gray: '#F2F2F2',
      color: "#83E4E4",
      text: 'Написать комментарий...'
    };
    this.contentEditable = React.createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.visibility = this.visibility.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {
    let text, length;
    let {color} = this.state;
    if (this.contentEditable.current && this.contentEditable.current.contains(e.target)) {
      window.a = this.contentEditable.current
      text = this.contentEditable.current.textContent;
      length = this.contentEditable.current.textContent.length;
      if(text === 'Написать комментарий...') {
        length = 0;
        text = '';
        color = this.state.blue;
      }
    } else {
        text = this.contentEditable.current.textContent;
        if(text === '') {
          length = 0;
          text = 'Написать комментарий...';
          color = this.state.blue;
        }
      }
    this.setState({
      text: text,
      length: length,
      color: color
    });

  }

  visibility(size, index) {
    if (index === size) {
      return 'none';
    }
    return '1px solid #83E4E4';
  }

  handleOnChange(e) {
    const length = e.currentTarget.textContent.length;
    const text = e.currentTarget.textContent;
    let {color} = this.state;
    if(length === 0) {
        color = this.state.blue;
    } else {
        color = this.state.gray
    }
    this.setState({
      text: text,
      length: length,
      color: color
    })
  }

  render() {
    const Comments = this.props.obj.map((element, index)=>
    <div key={element.id_comment}
      style={{"borderBottom" : this.visibility(this.props.obj.length, index + 1)}}
      className={"comment " + this.props.classN + "__comment" + index}
      >
      <div className={this.props.classN + "__comment-content"}>
        <Avatar2 classN={this.props.classN + "__comment-avatar2"} src={element.photo}/>
        <div className={this.props.classN + "__comment-rightSide"}>
          <p className={this.props.classN + "__comment-nickName"}>{element.nick_name}</p>
          <p className={this.props.classN + "__comment-text"}>{element.text}</p>
        </div>
      </div>
      <div className={this.props.classN + "__comment-footer"}>
        <div className={this.props.classN + "__comment-likes"}>
          <img src={LikeSvg} width="20" height="20" alt=""/>
          <p>{element.likes}</p>
        </div>
        <div className={this.props.classN + "__comment-dislikes"}>
          <img src={DislikeSvg} width="20" height="20" alt=""/>
          <p>{element.dislikes}</p>
        </div>
      </div>
    </div>
  )
    const {color} = this.state;
    return (
      <div className={"comments " + this.props.classN + "__comments"} style={{"display" : this.props.style}}>
        <p className={this.props.classN + "__moreComments"}>Предыдущие комментарии</p>
        {Comments}
        <div  className={this.props.classN + "__reply"}>
          <Avatar2 classN={this.props.classN + "__reply-avatar2"} src={placeholder}/>
          <ContentEditable
              className={this.props.classN + "__reply-input"}
              innerRef={this.contentEditable}
              html={this.state.text} // innerHTML of the editable div
              onChange={this.handleOnChange} // handle innerHTML change
              onClick={this.handleClickOutside}
              style={{"color" : color}}
            />
          <img src={SendSvg} alt=""/>
        </div>
      </div>
    )
  }
}
export default Comment;
