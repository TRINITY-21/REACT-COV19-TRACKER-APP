import React from 'react'
import {Card,CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
import Loader from 'react-loader-spinner';

const Cards=({data: {confirmed,deaths,lastUpdate,recovered}})=>{
	if(!confirmed){
		return(
    <div
     style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="white" height="100" width="100" />
    </div>		
    );
	} 

	return(
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.infected)}>

					<CardContent>
						<Typography color='textSecondary' gutterBottom><b style={{color:'blue'}}>Infected</b></Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={confirmed.value} duration={2.5} seperator=','/>
						</Typography>
						<Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant='body2'>Number of Active Cases</Typography>

					</CardContent>

				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.recovered)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom><b style={{color:'green'}}>Recovered</b></Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={recovered.value} duration={2.5} seperator=','/>
						</Typography>
						<Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant='body2'>Number of Recovery Cases</Typography>

					</CardContent>

				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.deaths)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom><b style={{color:'red'}}>Death</b></Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={deaths.value} duration={2.5} seperator=','/>
						</Typography>
						<Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>	
						<Typography variant='body2'>Number of Death Cases</Typography>

					</CardContent>
					</Grid>
				
			</Grid>
		</div>
		)

}

export default Cards