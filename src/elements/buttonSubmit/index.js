import React from 'react';

const ButtonS = (props) => {
  return (
    <button className={"buttonS "+ props.classN}>
      {props.text}
    </button>
  );
}

export default ButtonS;
