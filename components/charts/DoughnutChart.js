import {useState} from 'react'
import { Doughnut  } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

import ChangePreviewBtn from './ChangePreviewBtn'
  
  import classes from './charts.module.scss'
  
  const doughnutChart = (props) => {
    const [index, setIndex] = useState(0)
        const data = {
          backgroundColor: props.myData?.bgColor,
          labels: props.myData?.labels.map((label) => {
            return label
        }),
          datasets: [
            {
              label: `My skills level in ${props.myData?.years[index]}`,
              data: props.myData?.skills.map((data) => {
                return data.level[index]
            }),
            backgroundColor: props.myData?.bgColor,
            hoverOffset: 4,
            },
          ],
        }
        
        const options = {
          responsive: true,
          elements: {
            arc: {
              weight: 0.5,
              borderWidth: 3,
            },
          },
          plugins: {
            title: {
              display: true,
              text: `Skills in ${props.myData?.years[index]}`,
              font: {
                size: '20px'
              },
            },
          }
        }
      return(
        <>
          <Doughnut data={data} width={500} height={200} options={options} className={classes.DoughnutChart}></Doughnut>
          <ChangePreviewBtn array={props.myData?.years} setIndex={setIndex}/>
        </>
      )
  }
  
  export default doughnutChart