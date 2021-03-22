import './App.css';

import Data from './Components/Data';
import Form from './Components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeData } from './Redux/Actions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeData());
	}, []);

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Form} />
					<Route exact path='/data' component={Data} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
