import React from 'react';
import ProgressLabel from 'react-progress-label';
const progress = 50;
const textStyle = {
  'fill': '#ffffff',
  'textAnchor': 'middle'
};
export default class ProgressPieChart2 extends React.Component {

  render() {
  return (
    <ProgressLabel
      progress={progress}
      startDegree={60}
      progressWidth={8}
      trackWidth={20}
      cornersWidth={4}
      size={400}
      fillColor="black"
      trackColor="red"
      progressColor="green">

      <text x="200" y="200" style={textStyle}>{`${progress}%`}</text>

    </ProgressLabel>
  );
}}