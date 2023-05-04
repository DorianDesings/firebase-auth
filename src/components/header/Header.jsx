import { useContext } from 'react';
import LoginContext from '../../contexts/login.context';

const Header = () => {
	console.log('HEADER');
	const { user } = useContext(LoginContext);
	return <>{user ? <h1>Bienvenido {user}</h1> : <h1>No hay usuario</h1>}</>;
};

export default Header;
