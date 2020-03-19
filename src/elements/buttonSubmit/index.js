import React from 'react';

const ButtonS = (props) => {
  return (
    <button className={"ButtonS "+ props.classN}>
      {props.text}
    </button>
  );
}

export default ButtonS;
