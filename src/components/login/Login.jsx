import { useContext } from 'react';
import LoginContext from '../../contexts/login.context';

const Login = () => {
	console.log('LOGIN');
	const { setUser } = useContext(LoginContext);
	return (
		<form onSubmit={e => handleSubmit(e, setUser)}>
			<input type='text' name='name' />
			<input type='submit' value='Login' />
		</form>
	);
};

const handleSubmit = (e, setUser) => {
	e.preventDefault();
	setUser(e.target.name.value);
};

export default Login;
