
import {motion } from 'framer-motion';
import {useState, useEffect, useRef} from 'react';
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { chartData } from './chartData';

import classes from './charts.module.scss'


const ChartsGallery = () => {
    const [width, setWidth] = useState(0)
    const ref = useRef(0)
    useEffect(() => {  
        setWidth(ref.current.offsetWidth * 3.05)
    }, [])

    return (
        <motion.div className={classes.Carousel}>
            <motion.div className={classes.InnerCarousel} drag='x' dragConstraints={{right: 0, left: -width}} ref={ref} whileDrag={{scale: 0.99}} whileTap={{cursor: 'grabbing'}} dragPropagation dragTransition={{ bounceStiffness: 2000, bounceDamping: 25 }}>
                <motion.div className={classes.Item}>
                    <motion.div className={classes.Bar}>
                        <BarChart myData={chartData}/>
                    </motion.div>
                </motion.div>
                 <motion.div  className={classes.Item}>
                    <motion.div className={classes.Doughnut}>
                        <DoughnutChart myData={chartData}/>
                    </motion.div>
                </motion.div>
                <motion.div className={classes.Item}>
                    <motion.div className={classes.Doughnut}>
                        <PieChart myData={chartData} />
                    </motion.div>
                </motion.div>
                <motion.div className={classes.Item}>
                    <motion.div className={classes.Bar}>
                        <LineChart myData={chartData} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ChartsGallery