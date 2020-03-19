import React from 'react'

const InputS = (props) => {
  return (
    <input className={"InputS " + props.classN} type={props.type} value={props.value} />
  );
}

export default InputS;
