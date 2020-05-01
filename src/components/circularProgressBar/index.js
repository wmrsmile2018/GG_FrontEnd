import React, {Component} from 'react'
// https://codepen.io/bbrady/pen/ozrjKE

class CircularProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: "#EB5757",
      yellow: "#FFD074",
      green: "#B2DF8A",
      blue: "#83E4E4",
      darkBlue: "#3858FF",
      color: "#EB5757",
    };
    this.getColor = this.getColor.bind(this);
  }

  getColor(winRate) {
    if(winRate <= 47) {
      return this.state.red;
    }
    if(winRate <=50) {
      return this.state.yellow;
    }
    if(winRate <= 55) {
      return this.state.green;
    }
    return this.state.darkBlue;
  }

  render() {
    const sqSize = this.props.sqSize;
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;
    const color = this.getColor(this.props.percentage)
    return (
      <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`1.5px`}
            style={{
              stroke: this.state.blue,
            }}
            />
            <circle
              className="circle-background"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius - 10}
              strokeWidth={`1.5px`}
              style={{
                stroke: this.state.blue,
              }}
              />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius - 5}
            strokeWidth={`${this.props.strokeWidth - 1}px`}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: -dashOffset,
              stroke: color,
            }}

            />
          <text
            style={{
              fill: color
            }}
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle">
            {`${this.props.percentage}%`}
          </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 0,
  strokeWidth: 10
};


export default CircularProgressBar;
