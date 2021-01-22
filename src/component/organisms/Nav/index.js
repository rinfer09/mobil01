import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../atoms';
import './nav.css';

const Index = ({ onClick, user, logged }) => {
	const History = useHistory();
	return (
		<div className="nav-container">
			<h1 onClick={() => History.push('/')} className="brand">
				Mobil One
			</h1>
			<div className="nav">
				{!logged ? (
					<Button onClick={onClick} text="Login" width="60px" height="30px" />
				) : (
					<p>hello {user}!</p>
				)}
			</div>
		</div>
	);
};

export default Index;
