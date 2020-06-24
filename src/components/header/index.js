import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HeaderNews from '../../headers/news.js';
import HeaderArena from '../../headers/arena.js';
import HeaderPersonal from '../../headers/personal.js';

class Header extends Component {
  state = {
    path: '/',
    tag: null
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.path !== this.props.path) {
      let tag = null
      if (this.props.path.path === '/options' || this.props.path.path === '/personal-page') {
        tag = <HeaderPersonal/>;
      } else if (this.props.path.path === '/hall-of-fame' || this.props.path.path === '/arena'
       || this.props.path.path === '/mode-selection') {
         tag = <HeaderArena/>;
      } else if (this.props.path.path === '/news') {
        tag = <HeaderNews/>;
      } else {
        tag = null;
      }
      this.setState({
        path: this.props.path.path,
        tag: tag,
      })
    }
  }

  render() {
    const { path, tag } = this.state;
    const show = tag ? 'block' : 'none';
    return (
      <div className="header"
        style={{display: show}}
        >
        <div className="header-content">{tag}</div>
        <div className="header-outline"></div>
        <div className="header-background"></div>
      </div>

    )
  }
}

export default connect(state => ({
  path: state.path.path,
}))(Header);
