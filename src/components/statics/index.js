import React from 'react';
import CircularProgressBar from './../circularProgressBar/index';

const Statics = (props) => {
  const display = props.visibility ? {display: "grid"} :{display: "none"};
  return (
      <div className={"statics " + props.classN + "__statics"}
        style={ display }>
        <div className={props.classN + "__statics-column1"}>
          <div className={props.classN + "statics-kills"}>
            <label>Убийства</label>
            <span>{props.kills}</span>
          </div>
          <div className={props.classN + "statics-deaths"}>
            <label>Смерти</label>
            <span>{props.deaths}</span>
          </div>
          <div className={props.classN + "statics-matchedPlayed"}>
            <label>Сыгранные <br/> матчи</label>
            <span>{props.matchesPlayed}</span>
          </div>
          <div className={props.classN + "statics-mathcesWon"}>
            <label>Выигранные <br/> матчи</label>
            <span>{props.mathcesWon}</span>
          </div>
        </div>
        <div className={props.classN + "__statics-column2"}>
        <p>Процент побед</p>
        <CircularProgressBar
          strokeWidth="10"
          sqSize="150"
          percentage={props.winRate}
        />
        </div>
        <div className={props.classN + "__statics-column3"}>
          <div className={props.classN + "statics-roundsPlayed"}>
            <label>Сыгранные <br/> раунды</label>
            <span>{props.roundsPlayed}</span>
          </div>
          <div className={props.classN + "statics-roundsWon"}>
            <label>Выигранные <br/> раунды</label>
            <span>{props.roundsWon}</span>
          </div>
          <div className={props.classN + "statics-MVP"}>
            <label>MVP</label>
            <span>{props.mvp}</span>
          </div>
        </div>
      </div>
  );
}

export default Statics;
