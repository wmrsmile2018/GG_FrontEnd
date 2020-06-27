import React from 'react';
import PropTypes from 'prop-types';

const TextIF = (props) => {
  return (
    <div className={"textIF " + props.classN + "textIF"}>
      <p className={props.classN + "__p"}>{props.title}</p>
      <input type={props.type} onChange={props.actionOnChange}
        className={props.classN + "__input"}
        placeholder={props.placeholder}
        name={props.name}
        />
    </div>
  )
}

TextIF.propTypes = {
  title: PropTypes.string,
  classN: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  actionOnChange: PropTypes.func,
}


TextIF.defaultProps = {
  title: '',
  classN: '',
  name: '',
  type: '',
  placeholder: '',
  actionOnChange: () => {}
}

export default TextIF;
