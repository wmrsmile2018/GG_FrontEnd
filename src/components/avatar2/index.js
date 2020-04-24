import React from 'react';
// аватар с контуром в видео круга

const Avatar2 = (props) => {
  return (
    <div className={"avatar2 " + props.classN}>
      <img src={props.src} alt=""/>
    </div>
  );
}
export default Avatar2;
