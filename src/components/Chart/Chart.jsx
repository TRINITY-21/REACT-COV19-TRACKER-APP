import React, {useState,useEffect} from 'react'
import { fetchDailyData} from '../../Api'
import { Line,Doughnut} from 'react-chartjs-2'
import styles from './Charts.module.css'

const Chart=({data:{confirmed,deaths,recovered}, country})=>{
	const [dailyData, setDailyData] = useState({})

	useEffect(()=>{
		const fetchAPI = async ()=>{
			setDailyData(await fetchDailyData());
		}
		
		return fetchAPI()		
	},[])	

	const lineChart =(
		dailyData[0] ? (
			<Line 
			data={{ 
				labels: dailyData.map(({ date }) => date),
				datasets:[{
				data: dailyData.map(({ confirmed }) => confirmed),
				label: "Infected",
				borderColor: '#3333ff',
				fill:true
			},
			{
				data: dailyData.map(({ deaths }) => deaths),
				label: "Deaths",
				borderColor: 'red',
				backgroundColor:'rgba(255,0,0,0.5)',
				fill:true
			}], }}
		/>)
			: null
		)

	const doughnut = (

			confirmed ? 
			(
				<Doughnut 
					data={{
						labels:['Infected','Recovered', ' Deaths'],
						datasets:[{
							label:"People",
							backgroundColor:[
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)'
							],
							data:[confirmed.value,recovered.value,deaths.value]
						}]
					}}

					options={{
						legend:{display:false},
						title:{display:true, text:`Current state in ${country}`},

					}}

				/>
			): null
		)


	return(
		<div className={styles.container}>
			{country ? doughnut : lineChart}
		</div>
		)

}

export default Chart