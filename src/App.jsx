import { useState } from 'react';
import Header from './components/header/Header';
import Login from './components/login/Login';

import LoginContext from './contexts/login.context';

const App = () => {
	console.log('APP');
	const [user, setUser] = useState('');
	return (
		<>
			<h1>AUTH</h1>
			<LoginContext.Provider value={{ user, setUser }}>
				<Header />
				<Login />
			</LoginContext.Provider>
		</>
	);
};

export default App;
