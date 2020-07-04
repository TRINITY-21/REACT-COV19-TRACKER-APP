import React from 'react';
import spinner from './image/spinner.gif';

const Spinner=() => {
	return(
		<React.Fragment>

			<img src={spinner}
			alt="Loading..."
			style={{ width:'200px', margin:'40px auto', display:'block'}}/>
		</React.Fragment>	

		);
}
export default Spinner