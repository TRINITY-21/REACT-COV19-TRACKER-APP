import React,{useState,useEffect}from 'react'
import { NativeSelect, FormControl} from '@material-ui/core'
import styles from './Country.module.css' 
import { fetchCountries} from '../../Api'

const Country=({handleCountry})=>{
	const [countries, setCountries] = useState([])
	
	useEffect(()=>{
		const fetchAPI = async()=>{
			setCountries(await fetchCountries())
		}

		return fetchAPI()

	}, [])

	return(
		<FormControl>
		<label><h2><strong>Select Country</strong></h2></label>
			<NativeSelect defaultValue='' onChange={(e)=>{handleCountry(e.target.value)}} className={styles.formControl}>
				<option value='global'>Global</option>
				{ countries.map((country,index) => 
					<option key={index} value={country}> {country}</option>)}
			</NativeSelect>
		</FormControl>	
		)

}

export default Country