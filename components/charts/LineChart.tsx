import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import {objArrayMap} from '../../helpers/universalFunctions'
import {ChartData} from '../../interfaces/interfaces'
  
import classes from './charts.module.scss'

interface Props {
  myData: ChartData
}
  
  const lineChart = (props: Props) : JSX.Element => {
    const skillsByYear = props.myData?.labels.map((item, i) => {
      const obj = {
        label: item,
        data: objArrayMap(props.myData?.skills, 'level', i),
        borderColor: props.myData?.borderColor[i],
        backgroundColor: props.myData?.bgColor[i],
      }
      return obj
    })
    
        const data = {
          backgroundColor: props.myData?.bgColor,
          labels: props.myData?.years.map(year => year),
          datasets: skillsByYear
        }
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'SKILLS IMPROVEMENT',
              font: {
                size: '20px'
              }
            },
          },
        }
      return(
          <Line data={data} width={500} height={200} options={options as any} className={classes.DoughnutChart}></Line>
      )
  }
  
  export default lineChart