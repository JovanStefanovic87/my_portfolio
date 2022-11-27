import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)
import ChangePreviewBtn from './ChangePreviewBtn'
import { ChartData } from '../../interfaces/interfaces'

import classes from './charts.module.scss'

interface Props {
  myData: ChartData
}

const BarChart = (props: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(0)
  const data = {
    labels: props.myData?.labels.map((label) => {
      return label
    }),
    datasets: [
      {
        data: props.myData?.skills.map((data) => {
          return data.level[index]
        }),
        backgroundColor: props.myData?.bgColor,
        borderColor: props.myData?.borderColor,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Skills in ${props.myData?.years[index]}`,
        font: {
          size: '20px',
        },
      },
    },
  }

  return (
    <>
      <Bar
        data={data}
        width={500}
        height={200}
        options={options as any}
        className={classes.BarChart}
      ></Bar>
      <ChangePreviewBtn array={props.myData?.years} setIndex={setIndex} />
    </>
  )
}

export default BarChart
