import React, { Component } from 'react';
import styled from '@emotion/styled';

import StatisticsSmall from '../../public/svg/sSmall.svg';
import StatisticsMedium from '../../public/svg/sSmall.svg';
import StatisticsBig from '../../public/svg/sSmall.svg';

import Avatar2 from '../../components/avatar2/index';

// border: 1px dashed ${props => (props.isDragActive ? 'rgba(51,51,51,0.5)' : colors.GrayScale_200)};
// border: 1px solid red;
// height: 100px;
// width: 100px;
// background: green;
const DragAndDropContainer = styled.div`
  height: ${props => (props.height)};
  background: ${props => (props.background)};
  -webkit-mask-image: url(${props => (props.mask)});
  mask-image: url(${props => (props.mask)});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center center;
  mask-position: center center;
`;


const Statistics = ({type, background}) => {

  const setProp = (type) => {
    if (type === '1:1') {
      return [StatisticsSmall, 124];
    } else if (type === '2:2') {
      return [StatisticsMedium, 187];
    } else if (type === '2:2') {
      return [StatisticsBig, 364];
    }
  }

  const [Mask, height] = setProp(type);
  return (
    <div className="statistics"
        style={{height: height, display: background === 'none' ? 'none' : 'block'}}
      >
      <DragAndDropContainer className="statistics-outline" background={background}
         mask={Mask} height={height}>
         <div>
         </div>
      </DragAndDropContainer>
    </div>
  )
}
export default Statistics;
