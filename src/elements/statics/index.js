import React from 'react';
import CircularProgressBar from './../circularProgressBar/index';

const Statics = (props) => {
  return (
      <div className={"statics " + props.classN + "__statics"} style={{border: "1px solid black"}}>
        <div className={props.classN + "__statics-column1"}>
          <p className={props.classn + "statics-kills"}>{props.kills}</p>
          <p className={props.classn + "statics-deaths"}>{props.deaths}</p>
          <p className={props.classn + "statics-matchedPlayed"}>{props.matchesPlayed}</p>
          <p className={props.classn + "statics-mathcesWon"}>{props.mathcesWon}</p>
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
          <p className={props.classn + "statics-roundsPlayed"}>{props.roundsPlayed}</p>
          <p className={props.classn + "statics-roundsWon"}>{props.roundsWon}</p>
          <p className={props.classn + "statics-MVP"}>{props.mvp}</p>
        </div>
      </div>
  );
}

export default Statics;
