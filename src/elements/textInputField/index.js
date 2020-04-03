import React from 'react';

const TextIF = (props) => {
  return (
    <div className={"textIF " + props.classN + "-" + props.name}>
      <p className={props.classN + "__p"}>{props.name}</p>
      <input type="text" onChange={(props.actionOnChange)}
        className={props.classN + "__input"}/>
    </div>
  )
}

export default TextIF;
