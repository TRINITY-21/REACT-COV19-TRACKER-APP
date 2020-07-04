import React from 'react';

import { Cards, Chart, Country } from './components'
import styles from './App.module.css'
import{ fetchData } from './Api'
import image from './image/image.png'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:{},
      country:''
    }
  }
  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({data:fetchedData})
    console.log(this.state)
  }

  handleCountry = async(country)=>{
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country:country})
  }


  render(){
    const {data,country} = this.state

  return (

    <div className={styles.container}>
      <img className={styles.image} src={image} alt='COVID-19' />
      <h1 style={{ color:'red'}}>Make every effort to adhere to all <em>Protocols</em>.</h1>
      <Cards data={data}/>

        <Country handleCountry={this.handleCountry}/>
        <Chart data={data} country={country}/>
        
    </div>
  );
}
}
export default App;
