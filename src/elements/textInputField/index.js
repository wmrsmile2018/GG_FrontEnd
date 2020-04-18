import React from 'react';

const TextIF = (props) => {
  return (
    <div className={"textIF " + props.classN + "textIF"}>
      <p className={props.classN + "__p"}>{props.name}</p>
      <input type={props.type} onChange={props.actionOnChange}
        className={props.classN + "__input"}
        placeholder={props.placeholder}
        />
    </div>
  )
}

export default TextIF;
