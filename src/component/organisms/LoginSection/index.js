import React from 'react';
import { Button } from '../../atoms';
import { Input } from '../../moleculs';
import './loginSection.css';

const Index = ({ display, onClick, usernameChange, emailChange, onSubmit }) => {
	return (
		display && (
			<div className="login-container">
				<h1>Login</h1>
				<form onSubmit={onSubmit}>
					<Input onChange={usernameChange} label="name" placeholder="name" />
					<Input onChange={emailChange} label="email" placeholder="email" />
					<Button
						type="button"
						text="Kembali"
						width="60px"
						height="40px"
						marginTop="20px"
						marginRight="10px"
						onClick={onClick}
					/>
					<Button
						type="submit"
						text="Login"
						width="60px"
						height="40px"
						marginTop="20px"
					/>
				</form>
			</div>
		)
	);
};

export default Index;
