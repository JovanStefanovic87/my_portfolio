import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import { chartData } from './chartData'
import { ChartData } from '../../interfaces/interfaces'

import classes from './charts.module.scss'

const ChartsGallery = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    setWidth(ref.current.offsetWidth * 3.05)
  }, [])

  return (
    <motion.div className={classes.Carousel}>
      <motion.div
        className={classes.InnerCarousel}
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        ref={ref}
        whileDrag={{ scale: 0.99 }}
        whileTap={{ cursor: 'grabbing' }}
        dragPropagation
        dragTransition={{ bounceStiffness: 2000, bounceDamping: 25 }}
      >
        <motion.div className={classes.Item}>
          <motion.div className={classes.Bar}>
            <BarChart myData={chartData as ChartData} />
          </motion.div>
        </motion.div>
        <motion.div className={classes.Item}>
          <motion.div className={classes.Doughnut}>
            <DoughnutChart myData={chartData as ChartData} />
          </motion.div>
        </motion.div>
        <motion.div className={classes.Item}>
          <motion.div className={classes.Doughnut}>
            <PieChart myData={chartData as ChartData} />
          </motion.div>
        </motion.div>
        <motion.div className={classes.Item}>
          <motion.div className={classes.Bar}>
            <LineChart myData={chartData as ChartData} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ChartsGallery
