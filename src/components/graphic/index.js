// https://whawker.github.io/react-jsx-highcharts/examples/AreaWithAnnotations/index.html

import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import addAnnotations from 'highcharts/modules/annotations';
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Annotation,
  Legend,
  AreaSeries,
  LineSeries,
  Tooltip
} from 'react-jsx-highcharts';

const plotOptions = {
     area: {
       stacking: 'normal'
     }
   }
 addAnnotations(Highcharts);

const Graphic = (props) => {
  return (

    <HighchartsChart plotOptions={ plotOptions }>
      <Chart  zoomType="x"/>
      <Legend />
      <Tooltip valueSuffix=" k"/>
      <XAxis id="myXaxis" categories={props.XAxis}>
        <XAxis.Title>{props.xTittle}</XAxis.Title>
      </XAxis>
      <YAxis id="myYaxis">
        <AreaSeries data={props.YAxis} name="Вид1" color="rgba(124, 181, 236, 0.75)"/>
        <LineSeries  data={props.YAxis} name="Вид2" color="rgba(124, 181, 236, 0.75)"/>
      </YAxis>
    </HighchartsChart>
  );
}

export default withHighcharts(Graphic, Highcharts);
// <HighchartsChart>
//   <Chart />
//   <Title>Dynamically updating data</Title>
//   <Legend>
//     <Legend.Title>Legend</Legend.Title>
//   </Legend>
//   <XAxis data={props.data2}>
//     <XAxis.Title>Time</XAxis.Title>
//   </XAxis>
//   <YAxis>
//     <YAxis.Title>Pressure (m)</YAxis.Title>
//     <LineSeries name="Sensor 1" data={props.data1} />
//   </YAxis>
// </HighchartsChart>
