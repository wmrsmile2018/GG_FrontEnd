import React from 'react'

const InputS = (props) => {
  return (
    <input className={"inputS " + props.classN} type={props.type} value={props.value} />
  );
}

export default InputS;
