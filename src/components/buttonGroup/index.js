import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({children, classN, vertical, ...attrs}) => {

  const classes = classNames (
    'btn-group',
    {[`btn-group_${classN}`]:classN},
    {vertical}
  )

  return (
    <div className={classes}
      {...attrs}
      >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  classN: PropTypes.string,
  vertical: PropTypes.bool
}

ButtonGroup.defaultProps = {
  children: null,
  classN: '',
  vertical: false
}

export default ButtonGroup;
