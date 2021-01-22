import React, { useEffect, useState } from 'react';
import {
	About,
	ContactSection,
	Footer,
	LoginSection,
	Nav,
	Title,
	WhySection,
} from '../../organisms';
import './home.css';

const Index = () => {
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
		setLogged(true);
	}

	useEffect(() => {
		setUsername(window.sessionStorage.getItem('username'));
		if (window.sessionStorage.getItem('username') !== null) {
			setLogged(true);
		}
	}, [logged]);

	return (
		<div>
			<Nav
				onClick={() => {
					setLogin(true);
				}}
				user={username}
				logged={logged}
			/>
			<Title />
			<About />
			<div style={{ padding: '0 6%' }}>
				<hr />
			</div>
			<WhySection />
			<div style={{ padding: '0 6%' }}>
				<hr />
			</div>
			<ContactSection />
			<Footer />
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
	);
};

export default Index;
