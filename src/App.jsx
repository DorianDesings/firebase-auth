import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Login from './components/login/Login';

import LoginContext from './contexts/login.context';

const App = () => {
	console.log('APP');
	const [user, setUser] = useState(getLocalUser);

	useEffect(() => {
		if (!user) return;
		localStorage.setItem('user', user);
	});
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

const getLocalUser = () => localStorage.getItem('user');

export default App;
