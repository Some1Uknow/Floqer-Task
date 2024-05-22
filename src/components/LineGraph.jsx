import React from 'react';
import { Line } from '@ant-design/charts';

const LineGraph = ({ data }) => {
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'totalJobs',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return <Line {...config} />;
};

export default LineGraph;
