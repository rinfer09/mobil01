import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../atoms';
import { Input, TextAreaInput } from '../../moleculs';
import { LoginSection, Nav } from '../../organisms';
import './contact.css';

const Index = () => {
	const History = useHistory();
	const [login, setLogin] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [logged, setLogged] = useState(false);

	function usernameHandler(e) {
		setUsername(e.target.value);
	}

	function emailHandler(e) {
		setEmail(e.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();
		window.sessionStorage.setItem('email', email);
		window.sessionStorage.setItem('username', username);
		setLogin(false);
	}

	useEffect(() => {
		setUsername(window.sessionStorage.getItem('username'));
		if (window.sessionStorage.getItem('username') !== null) {
			setLogged(true);
		}
	}, []);

	return (
		<div>
			<Nav
				onClick={() => {
					setLogin(true);
				}}
				user={username}
				logged={logged}
			/>{' '}
			<div className="contact-content">
				<h1>Hubungi Kami</h1>
				<Input
					label="email"
					placeholder="email"
					type="email"
					value={() => window.sessionStorage.getItem('username')}
				/>
				<TextAreaInput
					label="pesan"
					placeholder="Isi pesan yang ingin kamu sampaikan"
				/>
				<Button
					text="kirim"
					width="90px"
					height="30px"
					onClick={() => History.push('/')}
				/>
				{login && (
					<LoginSection
						display={login}
						onClick={() => setLogin(false)}
						usernameChange={usernameHandler}
						emailChange={emailHandler}
						onSubmit={submitHandler}
					/>
				)}
			</div>
		</div>
	);
};

export default Index;
