import React, { memo } from "react";
import Chart from "react-apexcharts";

const getDataForDonutChart = ({ list }) => ({    
    series: [...list.map(item => Number(item.views))],
    options: {
      labels: [...list.map(item => item.title)],
      title: {
        text: 'Data for a donut graph',
        align: 'center'
      },
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

const getDataForLineChart = ({ list }) => ({
  series: list.map(item => ({
    name: item.title,
    data: item.data.map(d => d[1])
  })),
  options: {
    xaxis: {
      categories: list[0].data.map(item => item[0]),
    },
    title: {
      text: 'Data for a line graph',
      align: 'center'
    }
  }
})

export const Graph = memo(({ type, data }) => {
  let dataChart = {}
  if (type === 'line') dataChart = getDataForLineChart(data)
  if (type === 'donut') dataChart = getDataForDonutChart(data)
  const { options, series } = dataChart;

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={500}
    />
  )
})