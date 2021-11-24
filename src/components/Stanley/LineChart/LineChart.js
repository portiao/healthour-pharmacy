import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

function LineChart(props) {
  const { datalist, count } = props

  // 最近7天的日期
  // TODO：確認時間地區為台灣?
  let last7days = []
  for (let i = 1; i <= 7; i++) {
    const date = moment()
      .subtract(7 * count - i, 'days')
      .format('MM/DD')
    last7days.push(date)
  }

  const turnoverData = datalist.filter((v) => {
    return last7days.includes(v.orderDate)
  })

  // for (let i = 0; i < 7; i++) {
  //   if (!turnoverData[i].orderDate[last7days[i]]) {
  //     turnoverData[i] = { turnover: 0 }
  //   }
  // }
  console.log(turnoverData)
  const data = {
    // 最近的七天
    labels: last7days,
    // 裡面的data
    datasets: [
      {
        label: '金額',
        data: turnoverData.map((v) => {
          return v.turnover
        }),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  return (
    <>
      <Line data={data} options={options} key={1}/>
    </>
  )
}

export default LineChart
