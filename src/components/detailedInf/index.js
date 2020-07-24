import React from 'react';
// import styled from '@emotion/styled';

import Avatar2 from '../avatar2/index'

// import StatisticsSmall from '../../public/svg/sSmall.svg';
// import StatisticsMedium from '../../public/svg/sSmall.svg';
// import StatisticsBig from '../../public/svg/sSmall.svg';

// border: 1px dashed ${props => (props.isDragActive ? 'rgba(51,51,51,0.5)' : colors.GrayScale_200)};
// border: 1px solid red;
// height: 100px;
// width: 100px;
// background: green;
// const DragAndDropContainer = styled.div`
//   height: ${props => (props.height)};
//   background: ${props => (props.background)};
//   -webkit-mask-image: url(${props => (props.mask)});
//   mask-image: url(${props => (props.mask)});
//   -webkit-mask-repeat: no-repeat;
//   mask-repeat: no-repeat;
//   -webkit-mask-position: center center;
//   mask-position: center center;
// `;


const DetailedInf = ({type, background}) => {

  // const setProp = (type) => {
  //   if (type === '1:1') {
  //     return [StatisticsSmall, 124];
  //   } else if (type === '2:2') {
  //     return [StatisticsMedium, 187];
  //   } else if (type === '2:2') {
  //     return [StatisticsBig, 364];
  //   }
  // }

  // const [Mask, height] = setProp(type);
  // <DragAndDropContainer className="statistics-outline" background={background}
  //    mask={Mask} height={height}>
  //    <div>
  //    </div>
  // </DragAndDropContainer>
  return (
    <div className="detailedInf"
        style={{height: 30, display: background === 'none' ? 'none' : 'block'}}
      >
      <div className="detailedInf-winner">
        <div className="detailedInf-user detailedInf-user1">
          <Avatar2
            classN="detailedInf-avatar2"
            src="http://placehold.it/32x32"
          />
          <p className="detailedInf-nickName">12345678901234567890</p>
          <div className="detailedInf-kills">
            <p className="detailedInf-title">Убийства</p>
            <p className="detailedInf-score">13</p>
          </div>
          <div className="detailedInf-deaths">
            <p className="detailedInf-title">Смерти</p>
            <p className="detailedInf-score">13</p>
          </div>
        </div>

        <div className="detailedInf-user detailedInf-user2">
          <Avatar2
            classN="detailedInf-avatar2"
            src="http://placehold.it/32x32"
          />
          <p className="detailedInf-nickName">12345678901234567890</p>
          <div className="detailedInf-kills">
            <p className="detailedInf-title">Убийства</p>
            <p className="detailedInf-score">13</p>
          </div>
          <div className="detailedInf-deaths">
            <p className="detailedInf-title">Смерти</p>
            <p className="detailedInf-score">13</p>
          </div>
        </div>
      </div>
      <div className="detailedInf-result">
        <p>13:9</p>
      </div>
      <div className="detailedInf-loser">
        <div className="detailedInf-user detailedInf-user1">
          <Avatar2
            classN="detailedInf-avatar2"
            src="http://placehold.it/32x32"
          />
          <p className="detailedInf-nickName">12345678901234567890</p>
          <div className="detailedInf-kills">
            <p className="detailedInf-title">Убийства</p>
            <p className="detailedInf-score">13</p>
          </div>
          <div className="detailedInf-deaths">
            <p className="detailedInf-title">Смерти</p>
            <p className="detailedInf-score">13</p>
          </div>
        </div>

        <div className="detailedInf-user detailedInf-user2">
          <Avatar2
            classN="detailedInf-avatar2"
            src="http://placehold.it/32x32"
          />
          <p className="detailedInf-nickName">12345678901234567890</p>
          <div className="detailedInf-kills">
            <p className="detailedInf-title">Убийства</p>
            <p className="detailedInf-score">13</p>
          </div>
          <div className="detailedInf-deaths">
            <p className="detailedInf-title">Смерти</p>
            <p className="detailedInf-score">13</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailedInf;
